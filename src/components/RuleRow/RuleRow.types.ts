import { Scores } from '../Game/Game.types';

/**
 * Defines the component props interface
 */
export interface RuleRowProps {
  score: number | undefined;
  name: string;
  doScore: React.MouseEventHandler<HTMLTableRowElement> | undefined;
  description: string;
  ruleFn: RuleFn;
}

export type RuleFn = (dice: number[]) => number;
export type ScoreType = keyof Scores;
