import React from "react";
import Card from "./Card";
import "./StartPage.css";

const StartPage = ({
    setShowStartPage,
    setShowQuestionsPage,
    setShowLastPage,
    username,
    setUsername}) => {
    
        const startQuiz1 = () => {
            if(username.trim().length > 0){
                setShowStartPage(false);
                setShowQuestionsPage(true);                
            }
        }
        const startQuiz2 = () => {
            if(username.trim().length > 0){
                setShowStartPage(false);
                setShowQuestionsPage(true);
            }
        }
        const submitQuiz = () => {
            if(username.trim().length > 0){
                setShowStartPage(false);
                setShowLastPage(true);
            }            
        }

    return(
        <Card>
            <h1 className="header">Welcome to Quiz.</h1>
            <h3 className="name_txt">Enter your name to start/submit the quiz.</h3>
            <input type="text" className="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
            <div className="quizbtn">
                <button className="quiz1_btn" onClick={startQuiz1}>Quiz 1</button>
                <button className="quiz2_btn" onClick={startQuiz2}>Quiz 2</button>
            </div>
            <button className="submit_btn" id="submit_btn" onClick={submitQuiz}>Submit Quiz</button>
        </Card>
    )
}

export default StartPage;