import { useState } from "react";
import "./App.css";
import FinalPage from "./components/FinalPage";
import QuestionsPage from "./components/QuestionsPage";
import StartPage from "./components/StartPage";
import LastPage from "./components/LastPage";
import Navbar from "./components/Navbar";

function App() {
    const [showStartPage, setShowStartPage] = useState(true);
    const [showQuestionsPage, setShowQuestionsPage] = useState(false);
    const [showFinalPage, setShowFinalPage] = useState(false);
    const [showLastPage, setShowLastPage] = useState(false);

    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [username, setUsername] = useState("");

  return <>
    <Navbar/>
    {showStartPage && <StartPage 
        score={score}
        setShowStartPage={setShowStartPage} 
        setShowQuestionsPage={setShowQuestionsPage} 
        setShowLastPage={setShowLastPage}
        bestScore={bestScore} 
        username={username} 
        setUsername={setUsername} />}

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
        setShowStartPage={setShowStartPage}
        setShowFinalPage={setShowFinalPage}
        username={username} 
        setUsername={setUsername} />}

    {showLastPage && <LastPage 
        score={score} 
        setShowLastPage={setShowLastPage}
        bestScore={bestScore} 
        username={username} 
        setUsername={setUsername} />}
  </>;
}

export default App;