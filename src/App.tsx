import { nanoid } from "nanoid";
import React from "react";
import "./App.css";
import {
  AppProvider as AppContextProvider,
  useAppContext,
} from "./app/AppContext";
import Input from "./components/input";
import Word from "./components/word";

function App() {
  const context = useAppContext();
  console.log(context.guess?.value);

  return (
    <div className="App">
      {context.attempts.map((word) => (
        <Word key={nanoid()} {...word} />
      ))}
      <Input />
    </div>
  );
}

function AppWithContext() {
  return (
    <AppContextProvider>
      <App />
    </AppContextProvider>
  );
}

export default AppWithContext;
