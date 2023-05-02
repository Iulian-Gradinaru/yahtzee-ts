export interface ScoreTableProps {
  scores: ScoreMap;
  doScore: (name: ScoreType, roll: number[]) => void;
}
