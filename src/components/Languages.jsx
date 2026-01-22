import { languages_object } from "../utils/languages_object";
import clsx from "clsx";

export default function Languages(props) {
  const langEl = languages_object.map((lang, index) => {
    const isEliminated = index < props.wrongGuessCount;
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };

    const className = clsx(
      "w-24 h-10 flex justify-center items-center rounded-sm transition-transform",
      {
        "line-through cursor-not-allowedte opacity-50": isEliminated,
        "hover:scale-110": !isEliminated,
      },
    );
    return (
      <span className={className} key={lang.name} style={styles}>
        {lang.name}
      </span>
    );
  });
  return (
    <section className="z-10 relative pt-10 flex justify-center flex-row flex-wrap">
      <div className="max-w-2xl flex flex-row justify-center gap-4 flex-wrap">
        {langEl}
      </div>
    </section>
  );
}
