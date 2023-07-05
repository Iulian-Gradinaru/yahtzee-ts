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
      border: '2px solid black',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },

    '@media (max-width: 391px)': {
      width: '100%',
      height: '72%',
      border: '2px solid black',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
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
      height: 278,
      border: '2px solid black',
    },

    '@media (max-width: 391px)': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100%',
      height: '50%',
      border: '2px solid black',
    },
  };
});

/**
 * Styles the Score Table Section
 */
export const Title = styled('h2')(() => {
  return {
    marginBottom: 6,
    marginTop: 6,
    borderBottom: '2px solid blue',
  };
});

// import { styled } from '@mui/system';
// import { Typography } from '@mui/material';

// export const ScoreTableContainer = styled('div')(() => ({
//   display: 'flex',
//   flexDirection: 'column',
//   fontSize: 14,
//   backgroundColor: 'white',
//   padding: 16,
//   width: '100%',
//   margin: -17,
//   '& table': {
//     width: '100%',
//   },
//   '@media (max-width: 768px)': {
//     padding: 8,
//     margin: -8,
//   },
// }));

// export const ScoreTableSection = styled('section')(() => ({
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   flexDirection: 'column',
//   verticalAlign: 'top',
//   width: '100%',
//   height: '50%',
//   '@media (max-width: 768px)': {
//     height: '100%',
//   },
// }));

// export const Title = styled(Typography)(({ theme }) => ({
//   marginBottom: theme.spacing(1),
//   marginTop: theme.spacing(1),
//   '@media (max-width: 768px)': {
//     fontSize: '1.125rem', // 18px
//   },
// }));
