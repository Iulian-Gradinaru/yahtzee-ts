import React from 'react';
import './RuleRow.css';
import { RuleRowProps } from './RuleRow.types';
import { RuleRowWrapper } from './RuleRow.styles';

export const RuleRow: React.FC<RuleRowProps> = ({
  score,
  name,
  doScore,
  description,
}) => {
  const disabled = score !== undefined;

  return (
    <RuleRowWrapper
      className={`RuleRow RuleRow-${disabled ? 'disabled' : 'active'}`}
      onClick={disabled ? undefined : doScore}
    >
      <td className="RuleRow-name">{name}</td>
      <td className="RuleRow-score">{score || description}</td>
    </RuleRowWrapper>
  );
};
