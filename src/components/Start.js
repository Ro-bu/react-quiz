import React from "react";

export default function Start (props) {
    return (
        <div className="quiz-start">
            <h1 className="start-title" >Quizzle</h1>
            <h3 className="start-subtitle">Test your wits!</h3>
            <button className="start-button" onClick={props.startGame}>Start quiz</button>
        </div>
    )
}