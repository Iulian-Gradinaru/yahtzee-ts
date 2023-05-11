import React from 'react';

/**
 * Imports components
 */
import { Die } from '../Die';

/**
 * Imports styled componens
 */
import { DiceContainer } from './Dice.styles';

/**
 * Imports types
 */
import { DiceProps } from './Dice.types';

/**
 * Displays the component
 */
export const Dice: React.FC<DiceProps> = ({
  dice,
  handleClick,
  locked,
  disabled,
  rolling,
}: DiceProps) => {
  return (
    <DiceContainer className="Dice">
      {dice.map((d, idx) => (
        <Die
          handleClick={handleClick}
          val={d}
          locked={locked[idx]}
          idx={idx}
          key={idx}
          disabled={disabled}
          rolling={rolling && !locked[idx]}
        />
      ))}
    </DiceContainer>
  );
};
