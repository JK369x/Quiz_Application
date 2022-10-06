import { createContext } from "react";
import { useState } from "react";
import { Menu } from "./components/Menu";
import { Quiz } from "./components/Quiz";
import { Score } from "./components/Score";
import './App.css'

export const DataContext = createContext();

function App() {
  const [appState, setAppState] = useState("menu"); //state view app
  const [score,setScore] = useState(0)
  return (
    <DataContext.Provider value={{appState,setAppState,score,setScore}}>
      <div className="App">
        {appState == "menu" && <Menu />}
        {appState == "quiz" && <Quiz />}
        {appState == "score" && <Score />}
      </div>
    </DataContext.Provider>
  );
}

export default App;
