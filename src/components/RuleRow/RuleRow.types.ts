import { Scores } from '../Game/Game.types';

export type RuleFn = (dice: number[]) => number;
export type ScoreType = keyof Scores;
// export interface RuleRowProps {
//   score: number | undefined;
//   name: string;
//   doScore: (name: ScoreType, ruleFn: RuleFn) => void;
//   description: string;
//   ruleFn: RuleFn;
// }

export interface RuleRowProps {
  score: number | undefined;
  name: string;
  doScore: React.MouseEventHandler<HTMLTableRowElement> | undefined;
  description: string;
  ruleFn: RuleFn;
}
