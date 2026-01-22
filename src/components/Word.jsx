import { useState } from "react";
import Keyboard from "./Keyboard";
import Languages from "./Languages";
import Status from "./Status";
import { languages_object } from "../utils/languages_object";
import { words } from "../utils/words";

export default function Word() {
  // const randomIndex = Math.floor(Math.random() * words.length);

  function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }
  const [currentWord, setcurrentWord] = useState(getRandomWord());
  const [guessedLetters, setguessedletters] = useState([]);
  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter),
  ).length;
  const letters = currentWord.split("").map((l, index) => {
    const isCorrect = guessedLetters.includes(l);
    // const isWrong = !guessedLetters.includes(l);
    // let wrongGuessCount = 0;
    // if (isWrong) {
    //   wrongGuessCount++;
    // }

    return (
      <div
        key={index}
        className="w-16 h-16 bg-gray-700 border-b-2 border-white text-white text-5xl leading-none flex justify-center items-center rounded-sm"
      >
        {isCorrect ? l.toUpperCase() : ""}
      </div>
    );
  });

  let isWon = false;
  let isLost = false;
  let correct = true;

  for (let i = 0; i < currentWord.length; i++) {
    if (!guessedLetters.includes(currentWord[i])) {
      correct = false;
      break;
    }
  }

  if (correct) {
    isWon = true;
  }

  const MAX_WRONG_GUESSES = languages_object.length;

  if (wrongGuessCount >= MAX_WRONG_GUESSES) {
    isLost = true;
  }

  const isgameOver = isWon || isLost;

  const lastGuessedLetter =
    guessedLetters.length > 0
      ? guessedLetters[guessedLetters.length - 1]
      : null;

  const lastGuessWasWrong =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  let lastEliminatedLanguage = null;

  if (lastGuessWasWrong && wrongGuessCount > 0) {
    lastEliminatedLanguage = languages_object[wrongGuessCount - 1];
  }

  function newgameClick() {
    setcurrentWord(getRandomWord());
    setguessedletters([]);
  }

  return (
    <>
      <Status
        wrongGuessCount={wrongGuessCount}
        isWon={isWon}
        isLost={isLost}
        lastEliminatedLanguage={lastEliminatedLanguage}
        currentWord={currentWord}
      />
      <Languages wrongGuessCount={wrongGuessCount} />
      <section className="relative z-10 pt-10 flex justify-center items-center flex-row gap-3">
        {letters}
      </section>
      <Keyboard
        isWon={isWon}
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        setguessedletters={setguessedletters}
        isgameOver={isgameOver}
        newgameClick={newgameClick}
      />
    </>
  );
}
