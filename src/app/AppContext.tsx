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
  attemptsLetters: string[];
  attemptsNb: number | undefined;
  initGuess: () => void;
  addAttempt: (str: string) => void;
  checkAttempt: () => void;
};
const AppContext = React.createContext<AppContextType>({
  guess: undefined,
  attempts: [],
  attemptsLetters: [],
  attemptsNb: undefined,
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
  const [attemptsLetters, setAttemptsLetters] = useState<string[]>([]);
  const attemptsNb = 6;

  const initGuess = useCallback(() => {
    setGuess(newWord(randInto(dictionary)));
  }, []);

  const checkAttempt = useCallback(() => {
    // verifier si les lettres correspondent entre guess et attempt
  }, []);

  const addAttempt = useCallback(
    (str: string) => {
      setAttempts((attempts) => attempts.concat(newWord(str)));
      checkAttempt();
    },
    [checkAttempt]
  );

  useEffect(() => {
    initGuess();
  }, [initGuess]);

  const MemoValue = useMemo(
    () => ({
      guess,
      attempts,
      attemptsLetters,
      attemptsNb,
      setAttempts,
      setAttemptsLetters,
      initGuess,
      addAttempt,
      checkAttempt,
    }),
    [guess, attempts, attemptsLetters, initGuess, addAttempt, checkAttempt]
  );

  return (
    <AppContext.Provider value={MemoValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
