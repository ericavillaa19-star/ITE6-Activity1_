import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Activity2.css";

function Activity2() {
  const [randomNumber, setRandomNumber] = useState(0);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("Guess a number between 1 and 10");
  const [attempts, setAttempts] = useState(0);

  const inputRef = useRef(null);

  useEffect(() => {
    generateNumber();
    inputRef.current.focus();
  }, []);

  const generateNumber = () => {
    const number = Math.floor(Math.random() * 10) + 1;
    setRandomNumber(number);
  };

  const checkGuess = () => {
    const userGuess = Number(guess);

    if (!guess) {
      setMessage("Please enter a number");
      return;
    }

    setAttempts(attempts + 1);

    if (userGuess === randomNumber) {
      setMessage("Correct! You guessed the number!");
    } else if (userGuess > randomNumber) {
      setMessage("Too high! Try again.");
    } else {
      setMessage("Too low! Try again.");
    }

    setGuess("");
    inputRef.current.focus();
  };

  const resetGame = () => {
    generateNumber();
    setAttempts(0);
    setMessage("New Game! Guess a number between 1 and 10");
    setGuess("");
    inputRef.current.focus();
  };

  return (
    <div className="activity2">
      <div className="activity2-container">

        <h1>GUESS THE NUMBER GAME</h1>

        <p>{message}</p>

        <input
          ref={inputRef}
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Enter number"
        />

        <div>
          <button onClick={checkGuess}>Guess</button>
          <button className="reset" onClick={resetGame}>
            Reset Game
          </button>
        </div>

        <p>Attempts: {attempts}</p>

        {attempts > 0 && <p>Keep trying!</p>}

        <p>{attempts === 0 ? "Start guessing!" : "Good luck!"}</p>

        <Link to="/activity3">
          <button className="next-btn">Next Activity ➜</button>
        </Link>

        <div className="button-group">
          <Link to="/activity1">
            <button className="back-btn">← Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Activity2;