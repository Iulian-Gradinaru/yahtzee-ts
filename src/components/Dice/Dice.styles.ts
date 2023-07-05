/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Styles the Dice Container
 */
export const DiceContainer = styled('div')(() => {
  return {
    margin: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    padding: 10,

    '@media (max-width: 768px)': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '66%',
      width: '81%',
      border: '2px solid white',
      gap: 20,
    },
    '@media (max-width: 391px)': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
      border: '2px solid white',
      gap: 20,
    },
  };
});
