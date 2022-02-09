import GraphemeProps, { StatusType } from "./type";

const Grapheme = ({ value, status }: GraphemeProps) => {
  const color = () => {
    switch (status) {
      case StatusType.valid:
        return "bg-red-300";
      case StatusType.present:
        return "bg-yellow-300";
      default:
        return "bg-gray-300";
    }
  };
  return <div className={`w-12 h-12 m-2 ${color()}`}>{value}</div>;
};

export default Grapheme;
