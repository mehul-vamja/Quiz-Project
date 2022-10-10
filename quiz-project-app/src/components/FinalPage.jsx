import React from "react";
import Card from "./Card";
import './FinalPage.css';

const FinalPage = ({score,
    setShowFinalPage,
    SetShowStartPage,
    bestScore,
    setBestScore,
    setScore,
    username,
    setUsername
    }) => {

    const handleClick = () => {
        if(score>bestScore){
            setBestScore(score);
        }

        setShowFinalPage(false);
        SetShowStartPage(true);
        setScore(0);
        setUsername("");
    }

    return (
        <Card>
            <h1 className="header">Congratulations! <br/> You have finished the quiz. <br/> {username} </h1>
            <h3 className="prime_txt">Final Score: </h3>
            <h3 className="final_score">{score}</h3>
            <button className="play_again_btn" onClick={handleClick} >Play Again</button>
        </Card>
    )
}

export default FinalPage;