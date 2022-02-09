import React, { useState } from "react";
import { useAppContext } from "../../app/AppContext";

const Input = () => {
  const context = useAppContext();
  const [input, setInput] = useState("");
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      context.addAttempt(input);
      setInput("");
    }
  };

  return (
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={handleKeyDown}
      minLength={context.guess?.length}
      maxLength={context.guess?.length}
    />
  );
};

export default Input;
