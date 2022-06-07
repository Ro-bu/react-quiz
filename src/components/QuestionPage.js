import React from "react";
import Question from "./Question";
import { nanoid } from "nanoid";

export default function QuestionPage (props) {
    let questionElements = props.data.map((question) => {
        return (
            <Question
            question={question.question}
            rightAnswer={question.correct_answer}
            falseAnswers={question.incorrect_answers}
            key={nanoid()}
        />
        )
    })
    return (
        <div className="question-page-container">
            {questionElements}
        </div>
    )
}