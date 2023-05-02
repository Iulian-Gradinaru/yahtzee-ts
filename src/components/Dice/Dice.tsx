import React from 'react';
import { Die } from '../Die/Die';
import { DiceProps } from './Dice.types';

export const Dice: React.FC<DiceProps> = ({
  dice,
  handleClick,
  locked,
  disabled,
  rolling,
}: DiceProps) => {
  return (
    <div className="Dice">
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
    </div>
  );
};
