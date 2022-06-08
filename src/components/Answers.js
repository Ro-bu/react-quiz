import React from "react";
import he from "he";

export default function Answers(props) {

    let answerElements = props.answers.map((answer) => {
        return (
            <div
                key={answer}
                className={props.answerChosen === answer ? "answer chosen" : "answer"}
                id={answer}
                onClick={() => {
                    props.chooseAnswer(answer)
                }}
            >
                {he.decode(answer)}
            </div>
        )
    })

    return (
        <div className="answer-container">
            {answerElements}
        </div>
    )
}