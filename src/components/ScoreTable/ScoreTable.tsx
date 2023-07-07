import React from 'react';

/**
 * Imports components
 */
import { RuleRow } from '../RuleRow';

/**
 * Imports styled components
 */
import {
  ScoreTableContainer,
  ScoreTableSection,
  Title,
  // CustomTable,
} from './ScoreTable.styles';

/**
 * Imports hooks
 */
import { useGameUtils } from '../../useGameUtils';

/**
 * Import types
 */
import { ScoreTableProps } from './ScoreTable.types';

/**
 * Displays the component
 */
export const ScoreTable: React.FC<ScoreTableProps> = ({ scores, doScore }) => {
  const {
    ones,
    twos,
    threes,
    fours,
    fives,
    sixes,
    fullHouse,
    threeOfKind,
    fourOfKind,
    smallStraight,
    largeStraight,
    yahtzee,
    chance,
  } = useGameUtils();

  /**
   * Handle the total score
   */
  const getTotalScore = () => {
    let totalScore = 0;
    for (let key in scores) {
      if (scores[key]) {
        totalScore += scores[key]!;
      }
    }
    return totalScore;
  };

  return (
    <ScoreTableContainer className="ScoreTable">
      <ScoreTableSection className="ScoreTable-section">
        <Title>Upper</Title>
        <table cellSpacing="0">
          <tbody>
            <RuleRow
              name="Ones"
              score={scores.ones}
              description={ones.description}
              doScore={() => doScore('ones', ones.evalRoll)}
              ruleFn={ones.evalRoll}
            />
            <RuleRow
              name="Twos"
              score={scores.twos}
              description={twos.description}
              doScore={() => doScore('twos', twos.evalRoll)}
              ruleFn={twos.evalRoll}
            />
            <RuleRow
              name="Threes"
              score={scores.threes}
              description={threes.description}
              doScore={() => doScore('threes', threes.evalRoll)}
              ruleFn={threes.evalRoll}
            />
            <RuleRow
              name="Fours"
              score={scores.fours}
              description={fours.description}
              doScore={() => doScore('fours', fours.evalRoll)}
              ruleFn={fours.evalRoll}
            />
            <RuleRow
              name="Fives"
              score={scores.fives}
              description={fives.description}
              doScore={() => doScore('fives', fives.evalRoll)}
              ruleFn={fives.evalRoll}
            />
            <RuleRow
              name="Sixes"
              score={scores.sixes}
              description={sixes.description}
              doScore={() => doScore('sixes', sixes.evalRoll)}
              ruleFn={sixes.evalRoll}
            />
          </tbody>
        </table>
      </ScoreTableSection>
      <ScoreTableSection className="ScoreTable-section ScoreTable-section-lower">
        <Title>Lower</Title>
        <table cellSpacing="0">
          <tbody>
            <RuleRow
              name="Three of Kind"
              score={scores.threeOfKind}
              description={threeOfKind.description}
              doScore={() => doScore('threeOfKind', threeOfKind.evalRoll)}
              ruleFn={threeOfKind.evalRoll}
            />
            <RuleRow
              name="Four of Kind"
              score={scores.fourOfKind}
              description={fourOfKind.description}
              doScore={() => doScore('fourOfKind', fourOfKind.evalRoll)}
              ruleFn={fourOfKind.evalRoll}
            />
            <RuleRow
              name="Full House"
              score={scores.fullHouse}
              description={fullHouse.description}
              doScore={() => doScore('fullHouse', fullHouse.evalRoll)}
              ruleFn={fullHouse.evalRoll}
            />
            <RuleRow
              name="Small Straight"
              score={scores.smallStraight}
              description={smallStraight.description}
              doScore={() => doScore('smallStraight', smallStraight.evalRoll)}
              ruleFn={smallStraight.evalRoll}
            />
            <RuleRow
              name="Large Straight"
              score={scores.largeStraight}
              description={largeStraight.description}
              doScore={() => doScore('largeStraight', largeStraight.evalRoll)}
              ruleFn={largeStraight.evalRoll}
            />
            <RuleRow
              name="Yahtzee"
              score={scores.yahtzee}
              description={yahtzee.description}
              doScore={() => doScore('yahtzee', yahtzee.evalRoll)}
              ruleFn={yahtzee.evalRoll}
            />
            <RuleRow
              name="Chance"
              score={scores.chance}
              description={chance.description}
              doScore={() => doScore('chance', chance.evalRoll)}
              ruleFn={chance.evalRoll}
            />
          </tbody>
        </table>
      </ScoreTableSection>
      <Title>TOTAL SCORE: {getTotalScore()}</Title>
    </ScoreTableContainer>
  );
};
