import React from "react";
import Card from "./Card";
import './FinalPage.css';

const FinalPage = ({
    score,
    setShowFinalPage,
    setShowStartPage,
    bestScore,
    setBestScore,
    setScore,
    username,
    setUsername,
    }) => {

    const handleClick = () => {
        
        if(score > bestScore){
            setBestScore(score);                                    
        }
        setShowFinalPage(false);
        setShowStartPage(true);       
        setScore(0);
        setUsername("");
    };

    return (
        <Card>
            <h1 className="header">Congratulations! <br/> You have finished the quiz. <br/><br/><br/> {username} </h1>
            <h3 className="prime_txt">Your Score is: </h3>
            <h3 className="final_score">{score}/10</h3>
            <button className="return_btn" onClick={handleClick}>Home Page</button>
        </Card>
    );
};

export default FinalPage;