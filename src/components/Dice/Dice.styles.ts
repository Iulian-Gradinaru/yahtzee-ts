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

    '@media (max-width: 768px)': {
      margin: 8,
    },
    '@media (max-width: 480px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
  };
});
