import { nanoid } from "nanoid";
import Grapheme from "../grapheme";
import WordProps from "./type";

const Word = (word: WordProps) => {
  return (
    <div className="flex">
      {word.trim.map((graph) => (
        <Grapheme key={nanoid()} value={graph.value} status={graph.status} />
      ))}
    </div>
  );
};

export default Word;
