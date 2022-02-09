import { useAppContext } from "../../app/AppContext";

const Input = () => {
  const context = useAppContext();
  return <input maxLength={context.guess?.value.length}></input>;
};

export default Input;
