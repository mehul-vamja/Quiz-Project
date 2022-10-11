import React from "react";
import Card from "./Card";
import "./StartPage.css";

const StartPage = ({
    bestScore,
    setShowStartPage,
    setShowQuestionsPage,
    username,
    setUsername}) => {
    

        const startGame = () => {
            if(username.trim().length > 0){
                setShowStartPage(false);
                setShowQuestionsPage(true);
            }
        }


    return(
        <Card>
            <h1 className="header">Welcome to Quiz.</h1>
            <h3 className="name_txt">Enter your Name.</h3>
            <input type="text" className="username" placeholder="UserName" value={username} onChange={e => setUsername(e.target.value)} />
            <button className="start_btn" onClick={startGame}>Start Quiz</button>
            {/* <p className="best_score">Best Score: <span>{bestScore}</span></p> */}
        </Card>
    )
}

export default StartPage;