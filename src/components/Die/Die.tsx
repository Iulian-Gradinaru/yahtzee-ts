// import './Die.css';
import { DieProps } from './Die.types';

import { Button, DieIcon } from './Die.styled';
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from '@fortawesome/free-solid-svg-icons';

export const Die: React.FC<DieProps> = ({
  numberWords = ['one', 'two', 'three', 'four', 'five', 'six'],
  val = 5,
  locked,
  disabled,
  rolling,
  handleClick,
  idx,
}) => {
  const handleDieClick = () => {
    if (handleClick) handleClick(idx!);
  };

  let classes = `Die fas fa-dice-${numberWords[val! - 1]} fa-5x`;
  if (locked) classes += ' Die-locked';
  if (rolling) classes += ' Die-rolling';

  const getDieFace = () => {
    const diceFaces = [
      faDiceOne,
      faDiceTwo,
      faDiceThree,
      faDiceFour,
      faDiceFive,
      faDiceSix,
    ];
    return diceFaces[val - 1];
  };

  return (
    <Button
      className={classes}
      onClick={handleDieClick}
      disabled={disabled}
      locked={locked ? 1 : 0}
      rolling={rolling ? 1 : 0}
    >
      <DieIcon icon={getDieFace()} />
    </Button>
  );
};
