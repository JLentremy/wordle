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

  return (
    <div className="App">
      {context.attempts.map((word, key) => (
        <Word key={key} {...word} />
      ))}
      <Input />
      <button onClick={() => context.addAttempt("chaton")}>button</button>
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
