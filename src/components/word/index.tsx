import { nanoid } from "nanoid";
import Grapheme from "../grapheme";
import { StatusType } from "../grapheme/type";
import WordProps from "./type";

const Word = (word: WordProps) => {
  return (
    <div className="flex">
      {word.trim.map((graph) => (
        <Grapheme key={nanoid()} value={graph} status={StatusType.absent} />
      ))}
    </div>
  );
};

export default Word;
