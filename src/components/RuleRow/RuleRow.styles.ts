/**
 * Imports styled
 */
import { styled } from '@mui/system';
import { keyframes } from '@mui/system';

/**
 * Styles the Rule Row Wrapper
 */
export const RuleRowWrapper = styled('tr')(() => {
  return {
    transition: 'all 0.2s',
    '&.RuleRow-active:hover': {
      cursor: 'pointer',
      background: 'rgba(227, 242, 253, 0.5)',
    },
    '&.RuleRow-disabled': {
      td: {
        textDecoration: 'line-through',
      },
      '&:hover': {
        cursor: 'not-allowed',
      },
    },
    td: {
      padding: '0.3em',
      borderBottom: 'solid 1px black',
    },
    '.RuleRow-name': {
      width: '50%',
      textAlign: 'left',
    },
    '.RuleRow-score': {
      width: '50%',
      textAlign: 'right',
    },

    '@media screen and (max-width: 768px)': {
      td: {
        // textDecoration: 'line-through',
        padding: '0.3em',
        // borderBottom: 'solid 1px black',
        '&:hover': {
          cursor: 'not-allowed',
        },
        '.RuleRow-name': {
          width: '50%',
          textAlign: 'left',
        },
        '.RuleRow-score': {
          width: '50%',
          textAlign: 'right',
        },
        '&.RuleRow-disabled': {
          td: {
            textDecoration: 'line-through',
          },
          '&:hover': {
            cursor: 'not-allowed',
          },
        },
      },
    },
    '@media screen and (max-width: 391)': {
      td: {
        display: 'block',
        textAlign: 'center',
        padding: '0.5em 0',
        borderBottom: 'none',
        '.RuleRow-name': {
          width: '50%',
          textAlign: 'left',
        },
        '.RuleRow-score': {
          width: '50%',
          textAlign: 'right',
        },
        '&.RuleRow-disabled': {
          td: {
            textDecoration: 'line-through',
          },
          '&:hover': {
            cursor: 'not-allowed',
          },
        },
      },
    },
  };
});

export const Slide = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 51%;
  }
`;
