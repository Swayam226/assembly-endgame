// import { useState } from "react";
import clsx from "clsx";

export default function Keyboard(props) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  // console.log(props.guessedLetters);

  function keyClick(letter) {
    /*
    const letterSet = new Set(prevLetters);
    letterSet.add(letter);
    return Array.from(letterSet);
    */

    props.setguessedletters((prev) =>
      prev.includes(letter) ? prev : [...prev, letter],
    );
  }

  const keys = alphabets.split("").map((letter) => {
    const isGuessed = props.guessedLetters.includes(letter);
    const isCorrect = isGuessed && props.currentWord.includes(letter);
    const isWrong = isGuessed && !props.currentWord.includes(letter);
    const className = clsx(
      "w-11 h-11 flex items-center justify-center bg-amber-300 rounded-md text-2xl hover:scale-95",
      {
        "bg-green-500 cursor-not-allowed": isCorrect,
        "bg-red-500 cursor-not-allowed": isWrong,
        "cursor-not-allowed": props.isWon,
      },
    );
    // console.log(className);

    return (
      <button
        key={letter}
        className={className}
        onClick={() => keyClick(letter)}
        aria-disabled={props.guessedLetters.includes(letter)}
        aria-label={`Letter ${letter}`}
      >
        {letter.toUpperCase()}
      </button>
    );
  });
  return (
    <section className="z-20 relative flex justify-center items-center flex-col pt-10">
      <div className="max-w-5xl flex justify-center items-center flex-wrap gap-5 font-semibold">
        {keys}
      </div>
      {props.isgameOver && (
        <div className="pt-5 pb-5 flex justify-center items-center">
          <button
            className="w-24 h-10 rounded-sm cursor-pointer bg-red-600 text-white transition-transform hover:scale-105"
            onClick={props.newgameClick}
          >
            New Game
          </button>
        </div>
      )}
    </section>
  );
}
