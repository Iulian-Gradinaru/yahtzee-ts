import { useState } from 'react';

/**
 * Provides utility functions for the game provider
 */
export const useGameUtils = () => {
  // sum of all dice
  const sum = (dice: number[]): number => {
    return dice.reduce((prev, curr) => prev + curr);
  };

  // frequencies of dice values
  const freq = (dice: number[]): number[] => {
    const freqs = new Map<number, number>();
    for (let d of dice) freqs.set(d, (freqs.get(d) || 0) + 1);
    return Array.from(freqs.values());
  };

  // # times val appears in dice
  const count = (dice: number[], val: number): number => {
    return dice.filter((d) => d === val).length;
  };

  //function that receives a score, a count function and a description and
  // returns an object with several associated properties and methods.
  const Rule = (
    score: number,
    count: (dice: number[], val: number) => number,
    description: string
  ) => {
    const [currentScore, setCurrentScore] = useState(0);
    const evalRoll = (dice: number[]): number => {
      return count(dice, score) * score;
    };
    return { currentScore, setCurrentScore, evalRoll, description };
  };

  //The objects ones, twos, threes, fours, fives, sixes are created using the Rule function and specify
  //the corresponding scores and descriptions for each number on the die.
  const ones = Rule(1, count, '1 point per 1');
  const twos = Rule(2, count, '2 points per 2');
  const threes = Rule(3, count, '3 points per 3');
  const fours = Rule(4, count, '4 points per 4');
  const fives = Rule(5, count, '5 points per 5');
  const sixes = Rule(6, count, '6 points per 6');

  //is a factory function similar to Rule, but is used for rules involving the sum of all dice if
  //they meet certain frequency conditions.
  const SumDistro = (count: number, description: string, score: number) => {
    const [currentScore, setCurrentScore] = useState(0);
    const evalRoll = (dice: number[]): number => {
      // do any of the counts meet of exceed this distro?
      return freq(dice).some((c) => c >= count) ? sum(dice) : 0;
    };
    return { currentScore, setCurrentScore, evalRoll, description, score };
  };

  //are created using the SumDistro function and specify the rules for "Three of a Kind"
  const threeOfKind = SumDistro(3, 'Sum all dice if 3 are the same', 0);

  //are created using the SumDistro function and specify the rules for "Four of a Kind"
  const fourOfKind = SumDistro(4, 'Sum all dice if 4 are the same', 0);

  //is a factory function similar to Rule, but is used for Full House rules.
  const FullHouse = (score: number, description: string) => {
    const [currentScore, setCurrentScore] = useState(0);
    const evalRoll = (dice: number[]): number => {
      const freqs = freq(dice);
      return freqs.includes(2) && freqs.includes(3) ? score : 0;
    };
    return { currentScore, setCurrentScore, evalRoll, description };
  };

  //is created using the SmallStraight function and specifies the rules for Small Straight.
  const SmallStraight = (score: number, description: string) => {
    const [currentScore, setCurrentScore] = useState(0);
    const evalRoll = (dice: number[]): number => {
      const d = new Set(dice);
      // straight can be 234 + either 1 or 5
      if (d.has(2) && d.has(3) && d.has(4) && (d.has(1) || d.has(5)))
        return score;

      // or 345 + either 2 or 6
      if (d.has(3) && d.has(4) && d.has(5) && (d.has(2) || d.has(6)))
        return score;

      return 0;
    };
    return { currentScore, setCurrentScore, evalRoll, description };
  };

  //is a factory function similar to Rule, but is used for Small Straight rules.
  const LargeStraight = (score: number, description: string) => {
    const [currentScore, setCurrentScore] = useState(0);
    const evalRoll = (dice: number[]): number => {
      const d = new Set(dice);

      // large straight must be 5 different dice & only one can be a 1 or a 6
      return d.size === 5 && (!d.has(1) || !d.has(6)) ? score : 0;
    };

    return { currentScore, setCurrentScore, evalRoll, description };
  };

  // is a factory function similar to Rule, but is used for Yahtzee rules.
  const Yahtzee = (score: number, description: string) => {
    const [currentScore, setCurrentScore] = useState(0);

    const evalRoll = (dice: number[]): number => {
      const freqs = new Map<number, number>();
      for (let d of dice) freqs.set(d, (freqs.get(d) || 0) + 1);
      return freqs.get(dice[0]) === 5 ? score : 0;
    };

    return { currentScore, setCurrentScore, evalRoll, description };
  };

  // full house scores as flat 25
  const fullHouse = FullHouse(25, '25 points for a full house');

  // small/large straights score as 30/40
  const smallStraight = SmallStraight(30, '30 points for a small straight');

  const largeStraight = LargeStraight(40, '40 points for a large straight');

  // yahtzee scores as 50
  const yahtzee = Yahtzee(50, '50 points for yahtzee');

  // for chance, can view as some of all dice, requiring at least 0 of a kind
  const chance = SumDistro(0, 'Sum of all dice', 0);

  return {
    ones,
    twos,
    threes,
    fours,
    fives,
    sixes,
    threeOfKind,
    fourOfKind,
    fullHouse,
    smallStraight,
    largeStraight,
    yahtzee,
    chance,
  };
};
