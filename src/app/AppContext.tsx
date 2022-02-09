import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import dictionary from "../assets/words";
import WordType from "../components/word/type";
import { randomInArray } from "./utils";

type AppContextType = {
  guess: WordType | undefined;
  initGuess: () => void;
};
const AppContext = React.createContext<AppContextType>({
  guess: undefined,
  initGuess: () => {
    // initially empty
  },
});

export const AppProvider: React.FunctionComponent = ({ children }) => {
  const [guess, setGuess] = useState<WordType | undefined>();
  const initGuess = useCallback(() => {
    const data: WordType = {
      value: randomInArray(dictionary),
    };
    setGuess(data);
  }, []);

  useEffect(() => {
    initGuess();
  }, [initGuess]);

  const MemoValue = useMemo(
    () => ({
      guess,
      initGuess,
    }),
    [guess, initGuess]
  );

  return (
    <AppContext.Provider value={MemoValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
