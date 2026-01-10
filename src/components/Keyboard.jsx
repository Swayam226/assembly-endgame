export default function Keyboard() {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const keys = alphabets.split("").map((key) => {
    return (
      <button
        key={key}
        className="w-11 h-11 flex items-center justify-center bg-amber-300 rounded-md text-2xl hover:scale-96"
      >
        {key.toUpperCase()}
      </button>
    );
  });
  return (
    <section className="z-20 relative flex justify-center items-center flex-col pt-10">
      <div className="max-w-5xl flex justify-center items-center flex-wrap gap-5 font-semibold">
        {keys}
      </div>
    </section>
  );
}
