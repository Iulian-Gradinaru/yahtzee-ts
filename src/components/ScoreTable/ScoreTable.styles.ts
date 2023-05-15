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
    '& table': {
      width: '100%',
      margin: '0 auto',
      minWidth: '400px',
    },
  };
});

/**
 * Styles the Score Table Section
 */
export const ScoreTableSection = styled('section')(() => {
  return {
    verticalAlign: 'top',
    width: '100%',
  };
});
