import Grapheme from "../grapheme";
import WordType from "./type";

const Word = ({ value }: WordType) => {
  return (
    <div className="flex">
      {value.split("").map((g, key) => (
        <Grapheme key={key} value={g} />
      ))}
    </div>
  );
};

export default Word;
