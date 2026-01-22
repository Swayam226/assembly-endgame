import { farewellText } from "../utils/farewell";

export default function Status(props) {
  if (props.isWon) {
    return (
      <section
        className="pt-10 relative flex justify-center items-center z-10 text-white"
        aria-live="polite"
        role="status"
      >
        <div className="bg-green-500 w-2xl h-26 flex justify-center gap-1 items-center flex-col">
          <h1 className="text-3xl font-semibold">You Won!!</h1>
          <h3 className="text-lg">Well Done</h3>
        </div>
      </section>
    );
  }

  if (props.isLost) {
    return (
      <section
        className="pt-10 relative flex-col flex justify-center items-center z-10 text-white"
        aria-live="polite"
        role="status"
      >
        <div className="bg-red-500 w-2xl h-26 flex justify-center gap-1 items-center flex-col">
          <h1 className="text-3xl font-semibold">
            You better start learning assembly :/
          </h1>
          <h3 className="text-lg">Better luck next time!!</h3>
        </div>
        <span className="text-lg text-white-600">
          The correct word is:
          <span className="font-bold"> {props.currentWord}</span>
        </span>
      </section>
    );
  }

  if (props.lastEliminatedLanguage) {
    const message = farewellText(props.lastEliminatedLanguage.name);

    return (
      <section
        className="pt-10 relative flex justify-center items-center z-10 text-white"
        aria-live="polite"
        role="status"
      >
        <div className="bg-orange-400 w-2xl h-26 flex justify-center gap-1 items-center flex-col">
          <h1 className="text-xl text-center">{message}</h1>
        </div>
      </section>
    );
  }

  return null;
}
