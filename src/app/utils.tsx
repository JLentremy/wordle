import GraphemeProps from "../components/grapheme/type";

export const randInto = (arr: string[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const newWord = (str: string) => {
  const trim = () => {
    const arr: GraphemeProps[] = [];
    str.split("").map((value: string) => arr.push({ value, status: null }));
    return arr;
  };

  return {
    value: str,
    trim: trim(),
  };
};
