import React from "react";
import blueBlob from "./images/blob-blue.png";
import yellowBlob from "./images/blob-yellow.png";
import Start from "./components/Start";

export default function App () {
  const [gameRunning, setGameRunning] = React.useState(false);
  function toggleGame () {
    setGameRunning(prev => !prev)
  }




  return (
    <div className="main">
      <img src={blueBlob} id="blue-blob" alt="blue blob"/>
      <img src={yellowBlob} id="yellow-blob" alt="yellow blob" />
      {!gameRunning && <Start startGame={toggleGame} />}
    </div>
  )
}