import { useState } from "react";
import Keyboard from "./Keyboard";
import Languages from "./Languages";
import Status from "./Status";

export default function Word() {
  const [currentWord, setcurrentWord] = useState("react");
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
  const checkingLettersinword = currentWord.split("");
  // const checkingLettersinguess = guessedLetters.split("");
  for (let i = 0; i < currentWord.length; i++) {
    if (!guessedLetters.includes(checkingLettersinword[i])) {
      correct = false;
      break;
    }
  }

  if (correct) {
    isWon = true;
  } else {
    isLost = true;
  }

  return (
    <>
      <Status wrongGuessCount={wrongGuessCount} isWon={isWon} />
      <Languages wrongGuessCount={wrongGuessCount} />
      <section className="relative z-10 pt-10 flex justify-center items-center flex-row gap-3">
        {letters}
      </section>
      <Keyboard
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        setguessedletters={setguessedletters}
      />
    </>
  );
}
