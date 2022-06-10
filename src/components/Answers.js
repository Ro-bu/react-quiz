import React from "react";
import he from "he";
import classNames from "classnames";

export default function Answers(props) {

    let answerElements = props.answers.map((answer) => {
        let answerClasses= classNames({
            "answer": !props.roundFinished,
            "answer-inactive": props.roundFinished,
            "chosen": !props.roundFinished && props.answerChosen === answer,
            "correct": props.roundFinished && props.correctAnswer === answer,
            "incorrect": props.roundFinished && props.correctAnswer !== answer && props.answerChosen === answer
        })
        return (
            <div
                key={answer}
                className={answerClasses}
                id={answer}
                onClick={() => {
                    if(!props.roundFinished){
                        props.chooseAnswer(props.index, answer)
                    }
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