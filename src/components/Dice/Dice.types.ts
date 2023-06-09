/**
 * Defines the component props interface
 */
export interface DiceProps {
  dice: number[];
  handleClick: (idx: number) => void;
  locked: boolean[];
  disabled: boolean;
  rolling: boolean;
}
