import React from 'react';
import { RuleRow } from '../RuleRow';
import { ScoreTableProps } from './ScoreTable.types';
import './ScoreTable.css';

import { useDiceGame } from '../../GameRules';

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
  } = useDiceGame();

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
    <div className="ScoreTable">
      <section className="ScoreTable-section">
        <h2>Upper</h2>
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
              ruleFn={ones.evalRoll}
            />
            <RuleRow
              name="Threes"
              score={scores.threes}
              description={threes.description}
              doScore={() => doScore('threes', threes.evalRoll)}
              ruleFn={ones.evalRoll}
            />
            <RuleRow
              name="Fours"
              score={scores.fours}
              description={fours.description}
              doScore={() => doScore('fours', fours.evalRoll)}
              ruleFn={ones.evalRoll}
            />
            <RuleRow
              name="Fives"
              score={scores.fives}
              description={fives.description}
              doScore={() => doScore('fives', fives.evalRoll)}
              ruleFn={ones.evalRoll}
            />
            <RuleRow
              name="Sixes"
              score={scores.sixes}
              description={sixes.description}
              doScore={() => doScore('sixes', sixes.evalRoll)}
              ruleFn={ones.evalRoll}
            />
          </tbody>
        </table>
      </section>
      <section className="ScoreTable-section ScoreTable-section-lower">
        <h2>Lower</h2>
        <table cellSpacing="0">
          <tbody>
            <RuleRow
              name="Three of Kind"
              score={scores.threeOfKind}
              description={threeOfKind.description}
              doScore={() => doScore('threeOfKind', threeOfKind.evalRoll)}
              ruleFn={ones.evalRoll}
            />
            <RuleRow
              name="Four of Kind"
              score={scores.fourOfKind}
              description={fourOfKind.description}
              doScore={() => doScore('fourOfKind', fourOfKind.evalRoll)}
              ruleFn={ones.evalRoll}
            />
            <RuleRow
              name="Full House"
              score={scores.fullHouse}
              description={fullHouse.description}
              doScore={() => doScore('fullHouse', fullHouse.evalRoll)}
              ruleFn={ones.evalRoll}
            />
            <RuleRow
              name="Small Straight"
              score={scores.smallStraight}
              description={smallStraight.description}
              doScore={() => doScore('smallStraight', smallStraight.evalRoll)}
              ruleFn={ones.evalRoll}
            />
            <RuleRow
              name="Large Straight"
              score={scores.largeStraight}
              description={largeStraight.description}
              doScore={() => doScore('largeStraight', largeStraight.evalRoll)}
              ruleFn={ones.evalRoll}
            />
            <RuleRow
              name="Yahtzee"
              score={scores.yahtzee}
              description={yahtzee.description}
              doScore={() => doScore('yahtzee', yahtzee.evalRoll)}
              ruleFn={ones.evalRoll}
            />
            <RuleRow
              name="Chance"
              score={scores.chance}
              description={chance.description}
              doScore={() => doScore('chance', chance.evalRoll)}
              ruleFn={ones.evalRoll}
            />
          </tbody>
        </table>
      </section>
      <h2>TOTAL SCORE: {getTotalScore()}</h2>
    </div>
  );
};
