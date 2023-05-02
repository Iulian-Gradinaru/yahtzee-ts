import { useState } from 'react';
import {
  RuleProps,
  RuleInstance,
  TotalOneNumberProps,
  SumDistroProps,
} from './Rules.types';

export const useGameUtils = () => {
  const useRule = (rule: RuleInstance) => {
    const [score, setScore] = useState<number>(0);

    const evalRoll = (dice: number[]) => {
      const result = rule.evalRoll(dice);
      setScore(result);
      return result;
    };

    return {
      score,
      evalRoll,
    };
  };

  const useTotalOneNumber = ({ val }: TotalOneNumberProps) => {
    const rule = new Rule({
      score: 0,
      evalRoll: (dice: number[]) => val * rule.count(dice, val),
    });

    return useRule(rule);
  };

  const useSumDistro = ({ count }: SumDistroProps) => {
    const rule = new Rule({
      score: 0,
      evalRoll: (dice: number[]) =>
        rule.freq(dice).some((c) => c >= count) ? rule.sum(dice) : 0,
    });

    return useRule(rule);
  };

  const useFullHouse = ({ score }: RuleProps) => {
    const rule = new Rule({
      score: 0,
      evalRoll: (dice: number[]) => {
        const freqs = rule.freq(dice);
        return freqs.includes(2) && freqs.includes(3) ? score : 0;
      },
    });

    return useRule(rule);
  };

  const useSmallStraight = ({ score }: RuleProps) => {
    const rule = new Rule({
      score: 0,
      evalRoll: (dice: number[]) => {
        const d = new Set(dice);
        if (
          (d.has(2) && d.has(3) && d.has(4) && (d.has(1) || d.has(5))) ||
          (d.has(3) && d.has(4) && d.has(5) && (d.has(2) || d.has(6)))
        ) {
          return score;
        }
        return 0;
      },
    });

    return useRule(rule);
  };

  const useLargeStraight = ({ score }: RuleProps) => {
    const rule = new Rule({
      score: 0,
      evalRoll: (dice: number[]) => {
        const d = new Set(dice);
        return d.size === 5 && (!d.has(1) || !d.has(6)) ? score : 0;
      },
    });

    return useRule(rule);
  };

  const useYahtzee = ({ score }: RuleProps) => {
    const rule = new Rule({
      score: 0,
      evalRoll: (dice: number[]) => (rule.freq(dice)[0] === 5 ? score : 0),
    });

    return useRule(rule);
  };

  // ones, twos, etc score as sum of that value
  const useOnes = () =>
    useTotalOneNumber({ val: 1, description: '1 point per 1' });
  const useTwos = () =>
    useTotalOneNumber({ val: 2, description: '2 points per 2' });
  const useThrees = () =>
    useTotalOneNumber({ val: 3, description: '3 points per 3' });
  const useFours = () =>
    useTotalOneNumber({ val: 4, description: '4 points per 4' });
  const useFives = () =>
    useTotalOneNumber({ val: 5, description: '5 points per 5' });
  const useSixes = () =>
    useTotalOneNumber({ val: 6, description: '6 points per 6' });

  // three/four of kind score as sum of all dice
  const threeOfKind = useSumDistro({
    count: 3,
    description: 'Sum all dice if 3 are the same',
  });
  const fourOfKind = useSumDistro({
    count: 4,
    description: 'Sum all dice if 4 are the same',
  });

  // full house scores as flat 25
  const fullHouse = useFullHouse({
    score: 25,
    description: '25 points for a full house',
  });

  // small/large straights score as 30/40
  const smallStraight = useSmallStraight({
    score: 30,
    description: '30 points for a small straight',
  });
  const largeStraight = useLargeStraight({
    score: 40,
    description: '40 points for a large straight',
  });

  // yahtzee scores as 50
  const yahtzee = useYahtzee({
    score: 50,
    description: '50 points for yahtzee',
  });

  // for chance, can view as some of all dice, requiring at least 0 of a kind
  const chance = useSumDistro({ count: 0, description: 'Sum of all dice' });

  return {
    useOnes,
    useTwos,
    useThrees,
    useFours,
    useFives,
    useSixes,
    threeOfKind,
    fourOfKind,
    fullHouse,
    smallStraight,
    largeStraight,
    yahtzee,
    chance,
  };
};
