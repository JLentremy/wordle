import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import dictionary from "../assets/words";
import WordProps from "../components/word/type";
import { randomInArray } from "./utils";

type AppContextType = {
  guess: WordProps | undefined;
  attempts: WordProps[];
  initGuess: () => void;
  addAttempt: (str: string) => void;
};
const AppContext = React.createContext<AppContextType>({
  guess: undefined,
  attempts: [],
  initGuess: () => {
    // initially empty
  },
  addAttempt: () => {
    // initially empty
  },
});

export const AppProvider: React.FunctionComponent = ({ children }) => {
  const [guess, setGuess] = useState<WordProps | undefined>();
  const [attempts, setAttempts] = useState<WordProps[]>([]);
  const newWord = (str: string) => {
    return {
      value: str,
      trim: str.split(""),
    };
  };
  const initGuess = useCallback(() => {
    setGuess(newWord(randomInArray(dictionary)));
  }, []);
  const addAttempt = useCallback((str: string) => {
    setAttempts((attempts) => attempts.concat(newWord(str)));
  }, []);

  useEffect(() => {
    initGuess();
  }, [initGuess]);

  const MemoValue = useMemo(
    () => ({
      guess,
      attempts,
      setAttempts,
      initGuess,
      addAttempt,
    }),
    [guess, attempts, initGuess, addAttempt]
  );

  return (
    <AppContext.Provider value={MemoValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
