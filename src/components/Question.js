import React from "react";
import he from "he";

export default function Question (props) {
    // Fisher-Yates shuffle
    function shuffle(array) {
        let m = array.length, t, i;
        while (m) {
          i = Math.floor(Math.random() * m--);
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }
        return array;
    }
    let answers = [...props.falseAnswers, props.rightAnswer];
    shuffle(answers);
    let answerElements = answers.map((answer) => {
        return (
            <div key={answer} className="answer">
                {answer}
            </div>
        )
    })
    return (
        <div className="question-container">
            <h2 className="question-title">{he.decode(props.question)}</h2>
            <div className="answer-container">
                {answerElements}
            </div>
        </div>
    )
}