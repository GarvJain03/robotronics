import React from "react";
import { useState } from 'react';

function AddQuestion() {
  const[quizName, setquizName] = useState("")
  const[question, setquestion] = useState("")
  const[option1, setoption1] = useState("")
  const[option2, setoption2] = useState("")
  const[option3, setoption3] = useState("")

  return (
    <div>
      <h1>{quizName}</h1>
      <div>
          {question}
          <input placeholder="question"></input>
      </div>
      <div className="options">
          <ul>
              <li><input placeholder="OPTION1"></input><button>DELETE</button></li>
              <li><input placeholder="OPTION2"></input><button>DELETE</button></li>
              <li><input placeholder="OPTION3"></input><button>DELETE</button></li>
          </ul>
          <div><button>Add Option</button></div>
      </div>
      <button>SAVE</button>
    </div>
  );
}

export default AddQuestion;
