import { languages } from "../utils/languages";

export default function Languages() {
  const langEl = languages.map((lang) => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };
    return (
      <span
        className="w-24 h-10 flex justify-center items-center rounded-sm hover:scale-110"
        key={lang.name}
        style={styles}
      >
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
