import GraphemeType from "./type";

const Grapheme = ({ value }: GraphemeType) => {
  return <div className="w-12 h-12 m-2 bg-gray-300">{value}</div>;
};

export default Grapheme;
