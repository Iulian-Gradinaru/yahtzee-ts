import React from 'react';
import './RuleRow.css';
import { RuleRowProps } from './RuleRow.types';

export const RuleRow: React.FC<RuleRowProps> = ({
  score,
  name,
  doScore,
  description,
}) => {
  const disabled = score !== undefined;

  return (
    <tr
      className={`RuleRow RuleRow-${disabled ? 'disabled' : 'active'}`}
      onClick={disabled ? undefined : doScore}
    >
      <td className="RuleRow-name">{name}</td>
      <td className="RuleRow-score">{disabled ? score : description}</td>
    </tr>
  );
};
