import { useState } from "react";
import Keyboard from "./Keyboard";

export default function Word() {
  const [currentWord, setcurrentWord] = useState("react");
  const [guessedLetters, setguessedletters] = useState([]);
  const letters = currentWord.split("").map((l, index) => {
    const isCorrect = guessedLetters.includes(l);
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
