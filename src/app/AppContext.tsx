import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import dictionary from "../assets/words";
import WordProps from "../components/word/type";
import { newWord, randInto } from "./utils";

type AppContextType = {
  guess: WordProps | undefined;
  attempts: WordProps[];
  initGuess: () => void;
  addAttempt: (str: string) => void;
  checkAttempt: () => void;
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
  checkAttempt: () => {
    // initially empty
  },
});

export const AppProvider: React.FunctionComponent = ({ children }) => {
  const [guess, setGuess] = useState<WordProps | undefined>();
  const [attempts, setAttempts] = useState<WordProps[]>([]);

  const initGuess = useCallback(() => {
    setGuess(newWord(randInto(dictionary)));
  }, []);

  const addAttempt = useCallback((str: string) => {
    setAttempts((attempts) => attempts.concat(newWord(str)));
    checkAttempt();
  }, []);

  const checkAttempt = useCallback(() => {
    // verifier si les lettres correspondent entre guess et attempt
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
      checkAttempt,
    }),
    [guess, attempts, initGuess, addAttempt, checkAttempt]
  );

  return (
    <AppContext.Provider value={MemoValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
