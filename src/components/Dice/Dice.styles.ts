// import { styled } from '@mui/system';

// /**
//  * Styles the Container
//  */
// export const DiceContainer = styled('div')(() => {
//   return {
//     margin: '1em',
//     display: 'flex',
//     justifyContent: 'center',
//   };
// });

import { styled } from '@mui/system';

/**
 * Styles the Container
 */
export const DiceContainer = styled('div')(() => {
  return {
    margin: '1em',
    display: 'flex',
    justifyContent: 'center',

    '@media (max-width: 768px)': {
      margin: '0.5em',
    },
    '@media (max-width: 480px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
  };
});
