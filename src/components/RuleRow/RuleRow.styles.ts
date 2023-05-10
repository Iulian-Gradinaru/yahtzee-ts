import { styled } from '@mui/system';
import { keyframes } from '@mui/system';

export const RuleRowWrapper = styled('tr')`
  transition: all 0.2s;
  &.RuleRow-active:hover {
    cursor: pointer;
    background: rgba(227, 242, 253, 0.5);
  }
  &.RuleRow-disabled {
    td:first-child {
      text-decoration: line-through;
    }
    &:hover {
      cursor: not-allowed;
    }
  }
  td {
    padding: 0.3em;
    border-bottom: solid 1px black;
  }
  .RuleRow-name {
    width: 50%;
    text-align: left;
  }
  .RuleRow-score {
    width: 50%;
    text-align: right;
  }

  @media screen and (max-width: 768px) {
    td {
      display: block;
      text-align: center;
      padding: 0.5em 0;
      border-bottom: none;
    }
    .RuleRow-name,
    .RuleRow-score {
      width: 100%;
      text-align: center;
    }
  }
`;

export const Slide = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 51%;
  }
`;

// import { styled } from '@mui/system';
// import { keyframes } from '@mui/system';
// import { RuleRowProps } from '../RuleRow/RuleRow.types';

// export const RuleRowWrapper = styled('tr')<RuleRowProps>`
//   transition: all 0.2s;
//   ${({ score }) =>
//     score !== undefined &&
//     `
//     &.RuleRow-disabled {
//       td:first-child {
//         text-decoration: line-through;
//       }
//       &:hover {
//         cursor: not-allowed;
//       }
//     }
//   `}
//   ${({ score }) =>
//     score === undefined &&
//     `
//     &.RuleRow-active:hover {
//       cursor: pointer;
//       background: rgba(227, 242, 253, 0.5);
//     }
//   `}
//   td {
//     padding: 0.3em;
//     border-bottom: solid 1px black;
//   }
//   .RuleRow-name {
//     width: 50%;
//     text-align: left;
//   }
//   .RuleRow-score {
//     width: 50%;
//     text-align: right;
//   }

//   @media screen and (max-width: 768px) {
//     td {
//       display: block;
//       text-align: center;
//       padding: 0.5em 0;
//       border-bottom: none;
//     }
//     .RuleRow-name,
//     .RuleRow-score {
//       width: 100%;
//       text-align: center;
//     }
//   }
// `;

// export const Slide = keyframes`
//   0% {
//     background-position: 100% 50%;
//   }
//   100% {
//     background-position: 0% 51%;
//   }
// `;
