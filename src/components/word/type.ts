import GraphemeProps from "../grapheme/type";

type WordProps = {
  value: string;
  trim: GraphemeProps[];
  appear?: AppearProps[];
};

type AppearProps = {
  letter: string;
  occurence: number;
};

export default WordProps;
