import React from "react";
import Question from "./Question";
import { nanoid } from "nanoid";

export default function QuestionPage (props) {
    const [rightAnswers, setRightAnswers] = React.useState([false, false, false, false, false]);

    function changeAnswer(index, answer) {
        if(answer){
            setRightAnswers((prev) => {
                let newArray = [...prev]
                newArray.splice(index, 1, true)
                return (newArray)
            })
        } else {
            setRightAnswers((prev) => {
                let newArray = [...prev]
                newArray.splice(index, 1, false)
                return (newArray)
            })
        }

    }

    let questionElements = props.data.map((question) => {
        return (
            <Question
            question={question.question}
            rightAnswer={question.correct_answer}
            falseAnswers={question.incorrect_answers}
            key={nanoid()}
            // changeAnswer={changeAnswer}
            index={props.data.indexOf(question)}
        />
        )
    })

    return (
        <div className="question-page-container">
            {questionElements}
            <button className="game-button" id="question-page-button">Check Answers</button>
        </div>
    )
}