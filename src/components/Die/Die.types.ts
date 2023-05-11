/**
 * Defines the component props interface
 */
export interface DieProps {
  numberWords?: string[];
  val?: number;
  locked?: boolean;
  disabled?: boolean;
  rolling?: boolean;
  handleClick?: (idx: number) => void;
  idx?: number;
}

/**
 * Defines the Button Props interface
 */
export interface ButtonProps {
  locked: number;
  rolling: number;
}
