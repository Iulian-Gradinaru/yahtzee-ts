import React, { useState, useEffect } from "react";
import { Dice } from "../Dice";
import {ScoreTable} from "./ScoreTable";
import { Scores } from "./Game.types";
import "./Game.css";

const NUM_DICE = 5;
const NUM_ROLLS = 3;



 export const Game: React.FC = () => {
  const [dice, setDice] = useState<number[]>(Array.from({ length: NUM_DICE }));
  const [locked, setLocked] = useState<boolean[]>(Array(NUM_DICE).fill(false));
  const [rollsLeft, setRollsLeft] = useState<number>(NUM_ROLLS);
  const [rolling, setRolling] = useState<boolean>(false);
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

  useEffect(() => {
    animateRoll();
  }, []);

  const animateRoll = () => {
    setRolling(true);
    setTimeout(roll, 1000);
  };

  const roll = () => {
    setDice((prevDice) =>
      prevDice.map((d, i) => (locked[i] ? d : Math.ceil(Math.random() * 6)))
    );
    setLocked((prevLocked) =>
      rollsLeft > 1 ? prevLocked : Array(NUM_DICE).fill(true)
    );
    setRollsLeft((prevRollsLeft) => prevRollsLeft - 1);
    setRolling(false);
  };

  const toggleLocked = (idx: number) => {
    if (rollsLeft > 0 && !rolling) {
      setLocked((prevLocked) => [
        ...prevLocked.slice(0, idx),
        !prevLocked[idx],
        ...prevLocked.slice(idx + 1),
      ]);
    }
  };

  const doScore = (ruleName: keyof Scores, ruleFn: Function) => {
    setScores((prevScores) => ({
      ...prevScores,
      [ruleName]: ruleFn(dice),
    }));
    setRollsLeft(NUM_ROLLS);
    setLocked(Array(NUM_DICE).fill(false));
    animateRoll();
  };

  const displayRollInfo = () => {
    const messages = ["0 Rolls Left", "1 Roll Left", "2 Rolls Left", "Starting Round"];
    return messages[rollsLeft];
  };

  return (
    <div className="Game">
      <header className="Game-header">
        <h1 className="App-title">Yahtzee!</h1>
        <section className="Game-dice-section">
          <Dice
            dice={dice}
            locked={locked}
            handleClick={toggleLocked}
            disabled={rollsLeft === 0}
            rolling={rolling}
          />
          <div className="Game-button-wrapper">
            <button
              className="Game-reroll"
              disabled={locked.every((x) => x) || rollsLeft === 0 || rolling}
              onClick={animateRoll}
            >
              {displayRollInfo()}
            </button>
            >
          </div>
        </section>
      </header>
      <ScoreTable doScore={doScore} scores={scores} />
    </div>
  );
};