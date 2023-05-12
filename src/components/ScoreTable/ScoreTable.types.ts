/**
 * Imports types
 */
import { Scores } from '../Game/Game.types';

/**
 * Defines the component props interface
 */
export interface ScoreTableProps {
  scores: Scores;
  doScore: (name: ScoreType, ruleFn: RuleFn) => void;
}

export type RuleFn = (dice: number[]) => number;
export type ScoreType = keyof Scores;
