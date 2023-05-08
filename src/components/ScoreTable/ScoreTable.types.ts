// export interface ScoreTableProps {
//   scores: ScoreMap;
//   doScore: (name: ScoreType, roll: number[]) => void;
// }

import { Scores } from '../Game/Game.types';
export type RuleFn = (dice: number[]) => number;

type ScoreType = keyof Scores;
export interface ScoreTableProps {
  scores: Scores;
  doScore: (name: ScoreType, ruleFn: RuleFn) => void;
}
