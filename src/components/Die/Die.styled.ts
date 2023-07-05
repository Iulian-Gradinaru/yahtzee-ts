/**
 * Imports styled
 */
import { styled } from '@mui/system';
import { keyframes } from '@mui/system';

/**
 * Imports font awesome
 */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Imports types
 */
import { ButtonProps } from './Die.types';

/**
 * Defines an animation
 */
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

/**
 *  Styles the Button
 */
export const Button = styled('button', {
  shouldForwardProp: (propName) => propName !== 'locked',
})<ButtonProps>(
  (props) => {
    const { locked } = props;
    return {
      color: 'white',
      textShadow:
        '0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      backgroundColor: '#902bb0',
      border: 'none',
      opacity: locked ? 0.5 : 1,
      cursor: locked ? 'not-allowed' : 'pointer',
      '&:hover:not([disabled]):not(.Die-locked)': {
        opacity: 0.8,
      },
      // Add responsive styles here
      '@media (max-width: 768px)': {
        width: '100%',
        height: '100%',
      },
      '@media (max-width: 391px)': {
        width: '100%',
        height: '100%',
      },
      // General responsive styles

      width: '100%',
      borderRadius: 8,
    };
  },
  ({ rolling }) =>
    rolling && {
      animation: `${spin} 1s ease-out`,
      cursor: 'not-allowed',
      '&:hover': {
        cursor: 'not-allowed',
      },
    }
);

/**
 * styles the Die Icon
 */
export const DieIcon = styled(FontAwesomeIcon)(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: 0,
    '@media (max-width: 768px)': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '81%',
    },
    '@media (max-width: 480px)': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '81%',
    },
  };
});
