/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Styles the Game Container
 */
export const GameContainer = styled('div')(() => {
  return {
    // width: '30%',
    background: 'white',
    boxShadow: '0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1)',
    // margin: '0 30%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };
});

/**
 * Styles the Title
 */
export const Title = styled('h2')(() => {
  return {
    fontWeight: 100,
    fontSize: 32,
  };
});

/**
 * Styles the Game Dice Section
 */
export const GameDiceSection = styled('section')(() => {
  return {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 0,
  };
});

/**
 * Styles the Game Button Wrapper
 */
export const GameButtonWrapper = styled('div')(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
});

/**
 * Styles the Game Reroll
 */
export const GameReroll = styled('button')(() => {
  return {
    fontSize: 32,
    color: 'white',
    fontWeight: 100,
    transition: '0.5s',
    backgroundSize: '200% auto',
    boxShadow: '0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1)',
    backgroundImage:
      'linear-gradient(to right, #91eae4 0%, #7f7fd5 51%, #91eae4 100%)',
    borderRadius: 8,
    border: 'none',
    width: '50%',
    marginBottom: 32,
    '&:hover': {
      cursor: 'pointer',
      backgroundPosition: 'right center',
    },
    '&:active, &:focus': {
      outline: 'none',
    },
    '&:disabled': {
      backgroundColor: '#ddd',
      cursor: 'not-allowed',
      opacity: 0.5,
    },
  };
});

/**
 * Styles the Game Description
 */
export const GameDescription = styled('p')(() => {
  return {
    fontStyle: 'italic',
    color: 'white',
  };
});

/**
 * Styles the Game Header
 */
export const GameHeader = styled('div')(() => {
  return {
    width: '100%',
    background: 'linear-gradient(-45deg, #673ab7, #9c27b0)',
    backgroundSize: '400% 400%',
    animation: '$Gradient 15s ease infinite',
    '@keyframes Gradient': {
      '0%': {
        backgroundPosition: '0% 50%',
      },
      '50%': {
        backgroundPosition: '100% 50%',
      },
      '100%': {
        backgroundPosition: '0% 50%',
      },
    },
  };
});
