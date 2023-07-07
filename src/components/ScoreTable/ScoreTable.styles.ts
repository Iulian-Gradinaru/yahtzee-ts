/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Styles the Score Table Container
 */
export const ScoreTableContainer = styled('div')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 14,
    backgroundColor: 'white',
    padding: 16,
    width: '100%',
    height: '96%',

    '& table': {
      width: '100%',
    },
    '@media (max-width: 768px)': {
      width: '100%',
      height: '100%',
      // border: '2px solid black',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      '& table': {
        width: '100%',
        // backgroundColor: 'blue',
        height: '100%',
        // textDecoration: 'underline',
      },
    },

    '@media (max-width: 391px)': {
      width: '100%',
      height: '72%',
      // border: '2px solid black',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      '& table': {
        width: '100%',
      },
    },
  };
});

/**
 * Styles the Score Table Section
 */
export const ScoreTableSection = styled('section')(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    verticalAlign: 'top',
    width: '100%',
    height: '60%',
    paddingLeft: 10,
    paddingRight: 10,
    '@media (max-width: 768px)': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100%',
      // height: 278,
      // border: '2px solid black',
      // backgroundColor: 'yellow',
    },

    '@media (max-width: 391px)': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100%',
      // height: '50%',
      // border: '2px solid black',
    },
  };
});

/**
 * Styles the Score Title Section
 */
export const Title = styled('h2')(() => {
  return {
    marginBottom: 6,
    marginTop: 6,
    // borderBottom: '2px solid blue',
  };
});

// /**
//  * Styles the Score Title Section
//  */
// export const CustomTable = styled('table')(() => {
//   return {
//     backgroundColor: 'red',
//   };
// });
