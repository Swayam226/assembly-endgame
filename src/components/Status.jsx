export default function Status(props) {
  if (props.isWon) {
    return (
      <section className="pt-10 relative flex justify-center items-center z-10  text-white">
        <div className="bg-green-500 w-2xl h-26 flex justify-center gap-1 items-center flex-col">
          <h1 className="text-3xl text-white font-semibold">You Won!!</h1>
          <h3 className="text-lg text-white">Well Done</h3>
        </div>
      </section>
    );
  } else if (props.isLost) {
    return (
      <section className="pt-10 relative flex justify-center items-center z-10  text-white">
        <div className="bg-red-500 w-2xl h-26 flex justify-center gap-1 items-center flex-col">
          <h1 className="text-3xl text-white font-semibold">You Won!!</h1>
          <h3 className="text-lg text-white">Well Done</h3>
        </div>
      </section>
    );
  }
}
