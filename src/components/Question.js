import React from "react";
import he from "he";
import Answers from "./Answers";

export default function Question (props) {

    let answers = [...props.falseAnswers, props.rightAnswer];
    const [answerChosen, setAnswerChosen] = React.useState();

    function chooseAnswer (id) {
        setAnswerChosen(id)
        console.log(id)
    }

    function checkForRightAnswer () {
        if(props.rightAnswer === answerChosen){
            // props.changeAnswer(props.index, true);
            console.log("right answer")
        } else {
            // props.changeAnswer(props.index, false);
            console.log("wrong answer")
        }
    }
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

    React.useEffect(()=>{
        shuffle(answers);
    }, [answers])

    React.useEffect(() => {
        checkForRightAnswer();
    }, [answerChosen])
    
    return (
        <div className="question-container">
            <h2 className="question-title">{he.decode(props.question)}</h2>
            <Answers chooseAnswer={chooseAnswer} answerChosen={answerChosen} answers={answers} />
        </div>
    )
}