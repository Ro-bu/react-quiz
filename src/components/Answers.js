import React from "react";
import he from "he";

export default function Answers(props) {
    const [answerChosen, setAnswerChosen] = React.useState();
    console.log(props.answers)
    let answerElements = props.answers.map((answer) => {
        return (
            <div
                key={answer}
                className={answerChosen === answer ? "answer chosen" : "answer"}
                id={answer}
                onClick={() => chooseAnswer(answer)}
            >
                {he.decode(answer)}
            </div>
        )
    })
    function chooseAnswer (id) {
        setAnswerChosen(id)
    }
    return (
        <div className="answer-container">
            {answerElements}
        </div>
    )
}