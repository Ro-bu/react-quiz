import React from "react";
import blueBlob from "./images/blob-blue.png";
import yellowBlob from "./images/blob-yellow.png";
import Start from "./components/Start";
import QuestionPage from "./components/QuestionPage";

export default function App () {
  const [gameRunning, setGameRunning] = React.useState(false);
  const [questions, setQuestions] = React.useState();
  const [answerError, setAnswerError] = React.useState(false);
  // state roundsplayed seotud fetchi useeffectiga
  function toggleGame () {
    setGameRunning(prev => !prev)
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

  React.useEffect(() => {
    console.log(questions)
  }, [questions])

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
    .then(res => res.json())
    .then(data => setQuestions(data.results.map((question) => {
      return(
        {
          question: question.question,
          correctAnswer: question.correct_answer,
          allAnswers: shuffle([...question.incorrect_answers, question.correct_answer]),
          index: data.results.indexOf(question),
          answerChosen: ""
        }
      )
    })))
  }, [])

  function chooseAnswer (index, answer) {
    setQuestions(prev => {
      let newQuestions = [...prev]
      newQuestions[index].answerChosen = answer
      return newQuestions
    })
  };

  function endGame () {
    setGameRunning(false)
  }

  function areAllQuestionsAnswered () {
    let answerCounter = 0;
    questions.forEach((question) => {
      if(question.answerChosen !== "") {
        answerCounter++
      }
    })
    if (answerCounter === 5) {
      setAnswerError(false);
      return true;
    } else {
      setAnswerError(true);
      return false;
    }
  }

  function countRightAnswers () {
    let rightAnswerCounter = 0;
    questions.forEach((question) => {
      if(question.correctAnswer === question.answerChosen) {
        rightAnswerCounter++;
      }
    })
    return rightAnswerCounter;
  }

  return (
    <div className="main">
      <img src={blueBlob} id="blue-blob" alt="blue blob"/>
      <img src={yellowBlob} id="yellow-blob" alt="yellow blob" />
      {!gameRunning && <Start startGame={toggleGame} />}
      {gameRunning && <QuestionPage
                        chooseAnswer={chooseAnswer}
                        data={questions}
                        endGame={endGame}
                        areAllQuestionsAnswered={areAllQuestionsAnswered}
                        answerError={answerError}
                        countRightAnswers={countRightAnswers} />}
    </div>
  )
}