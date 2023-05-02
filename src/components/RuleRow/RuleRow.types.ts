export interface RuleRowProps {
  score: number | undefined;
  name: string;
  doScore: () => void;
  description: string;
}
