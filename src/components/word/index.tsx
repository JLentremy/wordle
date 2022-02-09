import Grapheme from "../grapheme";
import WordProps from "./type";

const Word = (word: WordProps) => {
  return (
    <div className="flex">
      {word.value.split("").map((g, key) => (
        <Grapheme key={key} value={g} />
      ))}
    </div>
  );
};

export default Word;
