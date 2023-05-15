import React, { useState, useEffect } from 'react';

/**
 * Imports the components
 */
import { Dice } from '../Dice';
import { ScoreTable } from '../ScoreTable';

/**
 * Imports styled components
 */
import {
  GameContainer,
  Title,
  GameDiceSection,
  GameButtonWrapper,
  GameReroll,
  GameHeader,
} from './Game.styles';

/**
 * Imports types
 */
import { Scores } from './Game.types';

/**
 * Representing the number of dice in the game
 */
const NUM_DICE = 5;

/**
 * Representing the maximum number of dice rolls in a round.
 */
const NUM_ROLLS = 3;

/**
 * Displays the component
 */
export const Game: React.FC = () => {
  /**
   * Initializes the dice values
   */
  const [dice, setDice] = useState<number[]>(Array.from({ length: NUM_DICE }));

  /**
   * Initializes the lock state of each die
   */
  const [locked, setLocked] = useState<boolean[]>(Array(NUM_DICE).fill(false));

  /**
   * Initializes the number of dice rolls left in a round
   */
  const [rollsLeft, setRollsLeft] = useState<number>(NUM_ROLLS);

  /**
   * Initializes the  the dice moving
   */
  const [rolling, setRolling] = useState<boolean>(false);

  /**
   * Initializes the scores in the game.
   */
  const [scores, setScores] = useState<Scores>({
    ones: undefined,
    twos: undefined,
    threes: undefined,
    fours: undefined,
    fives: undefined,
    sixes: undefined,
    threeOfKind: undefined,
    fourOfKind: undefined,
    fullHouse: undefined,
    smallStraight: undefined,
    largeStraight: undefined,
    yahtzee: undefined,
    chance: undefined,
  });

  /**
   * Handles the dice rolling animation
   */
  const animateRoll = () => {
    setRolling(true);
    setTimeout(() => {
      roll();
    }, 1000);
  };

  /**
   * Handles the actual roll of the dice
   */
  const roll = () => {
    setDice((st) =>
      st.map((d, i) => (locked[i] ? d : Math.ceil(Math.random() * 6)))
    );
    setLocked((st) =>
      rollsLeft > 1 ? st : st.map((value) => (value ? true : false))
    );
    setRollsLeft((st) => st - 1);
    setRolling(false);
  };

  /**
   * Handles the changes the lock/unlock state of a die
   */
  const toggleLocked = (idx: number) => {
    if (rollsLeft > 0 && !rolling) {
      setLocked((st) => [...st.slice(0, idx), !st[idx], ...st.slice(idx + 1)]);
    }
  };

  /**
   * Handles the update scores
   */
  const doScore = (
    rulename: keyof Scores,
    ruleFn: (dice: number[]) => number
  ) => {
    setScores((st) => ({
      ...st,
      [rulename]: ruleFn(dice),
    }));
    setRollsLeft(NUM_ROLLS);
    setLocked(Array(NUM_DICE).fill(false));
    animateRoll();
  };

  /**
   * Handles the message corresponding to the number of throws remaining in a round
   */
  const displayRollInfo = () => {
    const messages = [
      '0 Rolls Left',
      '1 Roll Left',
      '2 Rolls Left',
      'Starting Round',
    ];
    return messages[rollsLeft];
  };

  // const resetGame = () => {
  //   setDice((prevDice) =>
  //     prevDice.map((d, i) => (locked[i] ? d : Math.ceil(Math.random() * 6)))
  //   );
  //   setLocked(Array(NUM_DICE).fill(false));
  //   setRollsLeft(NUM_ROLLS);
  // };

  /**
   * Handles the animateRoll function
   */
  useEffect(() => {
    animateRoll();
  }, []);

  return (
    <GameContainer className="Game">
      <GameHeader className="Game-header">
        <Title className="App-title">Yahtzee!</Title>
        <GameDiceSection className="Game-dice-section">
          <Dice
            dice={dice}
            locked={locked}
            handleClick={toggleLocked}
            disabled={rollsLeft === 0}
            rolling={rolling}
          />
          <GameButtonWrapper className="Game-button-wrapper">
            <GameReroll
              className="Game-reroll"
              disabled={locked.every((x) => x) || rollsLeft === 0 || rolling}
              onClick={animateRoll}
            >
              {displayRollInfo()}
            </GameReroll>
          </GameButtonWrapper>
        </GameDiceSection>
      </GameHeader>
      <ScoreTable doScore={doScore} scores={scores} />
    </GameContainer>
  );
};
