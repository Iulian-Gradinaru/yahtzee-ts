export interface DieProps {
  numberWords?: string[];
  val?: number;
  locked?: boolean;
  disabled?: boolean;
  rolling?: boolean;
  handleClick?: (idx: number) => void;
  idx?: number;
}