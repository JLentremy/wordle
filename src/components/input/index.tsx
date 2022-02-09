import { useAppContext } from "../../app/AppContext";

const Input = () => {
  const context = useAppContext();
  return (
    <input
      minLength={context.guess?.length}
      maxLength={context.guess?.length}
    ></input>
  );
};

export default Input;
