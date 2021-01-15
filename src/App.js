import React, { useState } from "react";
import "./App.css";

function App() {
  const questions = [
    {
      questionsText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York ", isCorrect: false },
        { answerText: "London ", isCorrect: false },
        { answerText: "Paris ", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionsText: "Who is the Ceo of Telsa",
      answerOptions: [
        { answerText: "Jeff Bezos ", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates ", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];
 //state object, which will hold the current question number the user is on.
 // This will be initialised to 0 so the quiz takes the first question from the array:
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const handleAnswerButtonClick = (answerOptions) =>{
    const nextQuestion = currentQuestion +1 ;
    setCurrentQuestion(nextQuestion)
  }
      
  return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{false ? (
				<div className='score-section'>You scored 1 out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question 1</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOptions,index)=>
            (<button onClick = {()=> handleAnswerButtonClick()}>{answerOptions.answersText}</button>))}
					</div>
				</>
			)}
		</div>
	);
}
// the questions takes current questions in answerOptions maps through all the answerOptions and returns a button with all 
// the answer text from the answer options array. using answerOption.answerText
//as brendan about Index inside this map. 
export default App;

//need to write an object list of the questions for the quiz
// in the div the class name questions-text {questions[0].questionText}...
// that is pulling from the index of 0 the first question and taking it from..
//questions text in the object. of "questions"

// MAP! To loop over an array while applying "some action" to each item, we can use map()...
// want to take first question as starting point using index of 0 inside questions then map ...
// answer Options loop over the array and then pass a button in a arrow function of a ...
// answer option and get the answer text by going {answerOptions.answerText} 
// 