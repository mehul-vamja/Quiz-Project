import { useState } from "react";
import "./App.css";
import FinalPage from "./components/FinalPage";
import QuestionsPage from "./components/QuestionsPage";
import StartPage from "./components/StartPage";

function App() {
    const [showStartPage, setShowStartPage] = useState(true);
    const [showQuestionsPage, setShowQuestionsPage] = useState(false);
    const [showFinalPage, setShowFinalPage] = useState(false);

    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    const [username, setUsername] = useState("");

  return <>
    {showStartPage && (<StartPage 
        setShowStartPage={setShowStartPage} 
        setShowQuestionsPage={setShowQuestionsPage} 
        bestScore={bestScore} 
        username={username} 
        setUsername={setUsername} />)}

    {showQuestionsPage && <QuestionsPage 
        score={score} 
        setScore={setScore} 
        setShowQuestionsPage={setShowQuestionsPage} 
        setShowFinalPage={setShowFinalPage} />}

    {showFinalPage && <FinalPage
    score={score} 
    setScore={setScore}
    bestScore={bestScore}
    setBestScore={setBestScore} 
    showStartPage={setShowStartPage}
    showFinalPage={showFinalPage}
    username={username} 
    setUsername={setUsername} />}
  </>;
}

export default App;