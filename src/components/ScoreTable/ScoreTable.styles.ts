import { styled } from '@mui/system';

export const ScoreTableContainer = styled('div')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '0.9rem',
    backgroundColor: 'white',
    padding: '1em',
    '& table': {
      width: '100%',
      margin: '0 auto',
      minWidth: '400px',
    },
  };
});

export const ScoreTableSection = styled('section')(() => {
  return {
    verticalAlign: 'top',
    width: '100%',
  };
});
