import GraphemeProps from "./type";

const Grapheme = (graph: GraphemeProps) => {
  return <div className="w-12 h-12 m-2 bg-gray-300">{graph.value}</div>;
};

export default Grapheme;
