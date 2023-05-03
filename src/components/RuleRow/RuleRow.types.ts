import { Scores } from '../Game/Game.types';

type RuleFn = (dice: number[]) => number;
type ScoreType = keyof Scores;
export interface RuleRowProps {
  score: number | undefined;
  name: string;
  // doScore: () => void;
  doScore: (name: ScoreType, ruleFn: RuleFn) => void;

  description: string;
}
