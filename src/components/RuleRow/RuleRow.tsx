import React from 'react';

/**
 * Imports styled components
 */
import { RuleRowWrapper } from './RuleRow.styles';

/**
 * Imports types
 */
import { RuleRowProps } from './RuleRow.types';

/**
 * Displays the component
 */
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
