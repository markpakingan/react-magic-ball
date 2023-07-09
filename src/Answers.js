// Answers.js file

import React, { useState } from "react";
import answers from "./Eightball";


const GetOneAnswer = () => {

    const getRandomAnswer = () => {
        let idx = Math.floor(Math.random() * answers.length)
        return answers[idx]
    }

    const [oneAnswer, setOneAnswer] = useState({
        msg: "Think of a question",
        color: "#000",
      });

    const messageStyle = {
        width: "300px",
        height: "300px",
        border: "2px solid #000",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: oneAnswer.color, // Use the color from oneAnswer
        color: oneAnswer.msg === "Think of a question" ? "#FFF" : "#000",
        wordWrap: "break-word",
        textAlign: "center",
      };

    

    const handleClick = () => {
        const newAnswer = getRandomAnswer();
        setOneAnswer(newAnswer);
    }
      
        return (
        <div onClick={handleClick}>
          <p style={messageStyle} >
            {oneAnswer.msg} 
          </p>

        </div>
      );

}   


export default GetOneAnswer;