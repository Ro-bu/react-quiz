import React from "react";
import Question from "./Question";
import { nanoid } from "nanoid";

export default function QuestionPage (props) {

    const [roundFinished, setRoundFinished] = React.useState(false);


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
            roundFinished={roundFinished}
        />
        )
    });

    return (
        <div className="question-page-container">
            {questionElements}
            <div className="button-container">
                <button className="game-button" id="question-page-button" onClick={() => {
                    if (!roundFinished && props.areAllQuestionsAnswered()) {
                        setRoundFinished(true);
                    } else if (roundFinished) {
                        props.endGame();
                    }
                }}>
                    {roundFinished ? "Play Again" : "Check Answers"}
                </button>
                {props.answerError && <span className="answer-error">Please answer all questions</span>}
            </div>
        </div>
    )
};