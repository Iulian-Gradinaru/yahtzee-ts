/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Styles the Game Container
 */
export const GameContainer = styled('div')(() => {
  return {
    // background: 'white',
    boxShadow: '0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '95%',
    width: '32%',

    '@media (max-width: 768px)': {
      width: '100%',
      height: '100%',
    },

    '@media (max-width: 391px)': {
      width: '100%',
      height: '100%',
    },
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
    '@media (max-width: 768px)': {
      fontSize: 127,
      width: '100%',
      height: '32%',
    },
    '@media (max-width: 391px)': {
      fontSize: 127,
      width: '100%',
    },
  };
});

/**
 * Styles the Title
 */
export const Title = styled('h2')(() => {
  return {
    fontWeight: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    '@media (max-width: 768px)': {
      width: '100%',
      height: 'auto',
    },

    '@media (max-width: 391px)': {
      width: '100%',
      height: 65,
    },
  };
});

/**
 * Styles the Game Dice Section
 */
export const GameDiceSection = styled('section')(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 0,
    '@media (max-width: 768px)': {
      width: '100%',
      height: '62%',
    },

    '@media (max-width: 391px)': {
      width: '100%',
      height: '63%',
    },
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
    width: '100%',
    marginBottom: 10,
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
