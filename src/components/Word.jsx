import { useState } from "react";
import Keyboard from "./Keyboard";
import Languages from "./Languages";

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
  return (
    <>
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
