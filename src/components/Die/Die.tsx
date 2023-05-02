export * from './Die';
import React from 'react';
import './Die.css';
import { DieProps } from './Die.types';

export const Die: React.FC<DieProps> = ({
  numberWords = ['one', 'two', 'three', 'four', 'five', 'six'],
  val = 5,
  locked,
  disabled,
  rolling,
  handleClick,
  idx,
}: DieProps) => {
  const handleDieClick = () => {
    if (handleClick) handleClick(idx!);
  };

  let classes = `Die fas fa-dice-${numberWords[val! - 1]} fa-5x`;
  if (locked) classes += 'Die-locked';
  if (rolling) classes += 'Die-rolling';

  return <i className={classes} onClick={handleDieClick} disabled={disabled} />;
};
