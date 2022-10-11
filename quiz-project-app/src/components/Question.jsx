import React from "react";
import Card from "./Card";
import "./Question.css";

const Question = ({questionIndex,
    setQuestionIndex,
    questions,
    setShowQuestionsPage,
    setShowFinalPage,
    score,
    setScore}) => {

        const handleClick = (isCorrect) => {
            if(questionIndex<9){
                if(isCorrect){
                    setScore((score) => score += 1);
                }
                setQuestionIndex((prevIndex) => prevIndex +1);
            }else{
                if(isCorrect){
                    setScore((score) => score += 1);
                }
                setShowQuestionsPage(false);
                setShowFinalPage(true);
            }
        };

    return (
        <Card>

            <div className="maindiv">
                <div>
                    <h1 className="question">{questions[questionIndex].questionText}</h1>
                    <p className="dummytxt">Select one correct answer from given options.</p>
                </div>

                <div className="options">
                    {questions[questionIndex].answers.map((answer, index)=>
                        <div className="option" key={index} onClick={() => handleClick(answer.correctAnswer)} ><p>{answer.answerText}</p></div>
                    )}
                </div>
            
            </div>

            {/* <p className="score">
                Score: <span>{score}</span>
            </p> */}

            <p className="question_number">
                Question <span>{questionIndex + 1}</span>/10
            </p>
        </Card>
    )
}

export default Question;