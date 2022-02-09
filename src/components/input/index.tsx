import React, { useState } from "react";
import { useAppContext } from "../../app/AppContext";

const Input = () => {
  const context = useAppContext();
  const [input, setInput] = useState("");
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      context.addAttempt(input);
      setInput("");
    }
  };

  return (
    <input
      type="text"
      className="border-2"
      value={input}
      onChange={(e) => setInput(e.target.value.toUpperCase())}
      onKeyDown={handleKeyDown}
      minLength={context.guess?.value.length}
      maxLength={context.guess?.value.length}
    />
  );
};

export default Input;
