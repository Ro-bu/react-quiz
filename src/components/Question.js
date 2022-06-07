import React from "react";
import he from "he";
import Answers from "./Answers";

export default function Question (props) {

    const [rightAnswer, setRightAnswer] = React.useState(false);

    // Fisher-Yates array shuffle
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

    // let answerElements = answers.map((answer) => {
    //     return (
    //         <Answers
    //             answer={answer}
    //             isChosen={false}
    //             key={answer}
    //             id={answer}
    //             toggleChosen={() => toggleChosen(answer)}
    //         />
    //     )
    // })

    return (
        <div className="question-container">
            <h2 className="question-title">{he.decode(props.question)}</h2>
            <Answers answers={answers} />
        </div>
    )
}

// pass prop isChosen to answer defaults to false
// onclick isChosen -> true, add chosen class
// on checkasnwer button click check for truthy values