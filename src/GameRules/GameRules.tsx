import { useState } from 'react';

export const useDiceGame = () => {
  function sum(dice: number[]): number {
    // sum of all dice
    return dice.reduce((prev, curr) => prev + curr);
  }

  const freq = (dice: number[]): number[] => {
    // frequencies of dice values
    const freqs = new Map<number, number>();
    for (let d of dice) freqs.set(d, (freqs.get(d) || 0) + 1);
    return Array.from(freqs.values());
  };

  const count = (dice: number[], val: number): number => {
    // # times val appears in dice
    return dice.filter((d) => d === val).length;
  };

  const useRule = (
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

  const ones = useRule(1, count, '1 point per 1');
  const twos = useRule(2, count, '2 points per 2');
  const threes = useRule(3, count, '3 points per 3');
  const fours = useRule(4, count, '4 points per 4');
  const fives = useRule(5, count, '5 points per 5');
  const sixes = useRule(6, count, '6 points per 6');

  const useSumDistro = (count: number, description: string, score: number) => {
    const [currentScore, setCurrentScore] = useState(0);
    const evalRoll = (dice: number[]): number => {
      // do any of the counts meet of exceed this distro?
      return freq(dice).some((c) => c >= count) ? sum(dice) : 0;
    };
    return { currentScore, setCurrentScore, evalRoll, description, score };
  };

  const threeOfKind = useSumDistro(3, 'Sum all dice if 3 are the same', 0);
  const fourOfKind = useSumDistro(4, 'Sum all dice if 4 are the same', 0);

  const useFullHouse = (score: number, description: string) => {
    const [currentScore, setCurrentScore] = useState(0);
    const evalRoll = (dice: number[]): number => {
      const freqs = freq(dice);
      return freqs.includes(2) && freqs.includes(3) ? score : 0;
    };
    return { currentScore, setCurrentScore, evalRoll, description };
  };

  const useSmallStraight = (score: number, description: string) => {
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

  const useLargeStraight = (score: number, description: string) => {
    const [currentScore, setCurrentScore] = useState(0);
    const evalRoll = (dice: number[]): number => {
      const d = new Set(dice);

      // large straight must be 5 different dice & only one can be a 1 or a 6
      return d.size === 5 && (!d.has(1) || !d.has(6)) ? score : 0;
    };

    return { currentScore, setCurrentScore, evalRoll, description };
  };

  const useYahtzee = (score: number, description: string) => {
    const [currentScore, setCurrentScore] = useState(0);

    const evalRoll = (dice: number[]): number => {
      const freqs = new Map<number, number>();
      for (let d of dice) freqs.set(d, (freqs.get(d) || 0) + 1);
      return freqs.get(dice[0]) === 5 ? score : 0;
    };

    return { currentScore, setCurrentScore, evalRoll, description };
  };

  const fullHouse = useFullHouse(25, '25 points for a full house');

  // small/large straights score as 30/40
  const smallStraight = useSmallStraight(30, '30 points for a small straight');

  const largeStraight = useLargeStraight(40, '40 points for a large straight');

  // yahtzee scores as 50
  const yahtzee = useYahtzee(50, '50 points for yahtzee');

  // for chance, can view as some of all dice, requiring at least 0 of a kind
  const chance = useSumDistro(0, 'Sum of all dice', 0);

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
