import React from "react";

export default function Question (props) {
    let answers = [...props.falseAnswers, props.rightAnswer];
    let answerElements = answers.map((answer) => {
        return (
            <div key={answer} className="answer">
                {answer}
            </div>
        )
    })
    return (
        <div className="question-container">
            <h2 className="question-title">{props.question}</h2>
            <div className="answer-container">
                {answerElements}
            </div>
        </div>
    )
}