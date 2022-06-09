import React from "react";
import Question from "./Question";
import { nanoid } from "nanoid";

export default function QuestionPage (props) {

    let questionElements = props.data.map((question) => {
        return (
            <Question
            answerChosen={question.answerChosen}
            question={question.question}
            correctAnswer={question.correctAnswer}
            allAnswers={question.allAnswers}
            key={nanoid()}
            index={question.index}
            chooseAnswer={props.chooseAnswer}
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