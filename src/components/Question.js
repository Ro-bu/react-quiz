import React from "react";
import he from "he";
import Answers from "./Answers";

export default function Question (props) {

    return (
        <div className="question-container">
            <h2 className="question-title">{he.decode(props.question)}</h2>
            <Answers index={props.index} chooseAnswer={props.chooseAnswer} answerChosen={props.answerChosen} answers={props.allAnswers} />
        </div>
    )
}