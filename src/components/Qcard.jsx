import { useState } from "react";
import "../App.css";
import flashcards from "../data/flashcards";

const Qcard = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("Hidden");
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [inputFormValue, setInputFormValue] = useState("");
  const [trueAnswer, setTrueAnswer] = useState(flashcards[0].answer); // Initialize with first card answer
  const [answeredCorrectly, setAnsweredCorrectly] = useState("correct");

  const showNextQuestion = () => {
    setAnswer("Hidden");
    setIsAnswerRevealed(false);

    const nextIndex =
      questionIndex < flashcards.length - 1 ? questionIndex + 1 : 0;
    setQuestionIndex(nextIndex);
    setTrueAnswer(flashcards[nextIndex].answer);
    setAnsweredCorrectly(true);
  };

  const showPrevQuestion = () => {
    setAnswer("Hidden");
    setIsAnswerRevealed(false);

    const prevIndex =
      questionIndex > 0 ? questionIndex - 1 : flashcards.length - 1;
    setQuestionIndex(prevIndex);
    setTrueAnswer(flashcards[prevIndex].answer);
    setAnsweredCorrectly(true);
  };

  const showAnswer = () => {
    setIsAnswerRevealed(() => {
      return isAnswerRevealed ? false : true;
    });
    setAnswer(trueAnswer); // Use the updated true answer
    console.log("True Answer:");
    console.log(trueAnswer);
    setAnsweredCorrectly(true);
  };

  const handleChange = (e) => {
    setInputFormValue(e.target.value);
    setAnsweredCorrectly(true);
  };

  const handleSubmit = (e) => {
    console.log("Submit Pressed");
    // console.log(e.target.value);
    setInputFormValue("");
    console.log(inputFormValue);

    if (inputFormValue !== flashcards[questionIndex].answer) {
      setAnsweredCorrectly("wrong");
      document.getElementById("initial-question").classList.add("hidden");
      document
        .getElementById("eval-after-submit-correct")
        .classList.add("hidden");
      document
        .getElementById("eval-after-submit-wrong")
        .classList.remove("hidden");
    } else {
      setAnsweredCorrectly("correct");
      document.getElementById("initial-question").classList.add("hidden");

      document
        .getElementById("eval-after-submit-correct")
        .classList.remove("hidden");
      document
        .getElementById("eval-after-submit-wrong")
        .classList.add("hidden");
    }
  };

  return (
    <div className="questionCardContainer">
      <div
        onClick={showAnswer}
        className={"questionCard card " + (isAnswerRevealed ? "flipped" : "")}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: flashcards[questionIndex].color,
          textShadow: `-0.1px -0.1px 0 #000, 0.1px -0.1px 0 #000, -0.1px 0.1px 0 #000, 0.1px 0.1px 0 #000`,
          color: "black",
          border: `20px solid ${flashcards[questionIndex].color}`, // Fix the border syntax
          padding: `2%`,
          borderRadius: `12px`,
          flexWrap: `wrap`,
        }}
      >
        <div className="card-side front">
          <h2
            className="question "
            style={{
              display: isAnswerRevealed ? "none" : "flex",
              opacity: "100%",
            }}
          >
            Question {questionIndex + 1}:<br />
            {flashcards[questionIndex].question}
            <br />
            <br />
          </h2>
        </div>
        <div className="card-side back">
          <h2
            className="answer"
            style={{
              display: isAnswerRevealed ? "flex" : "none",
              opacity: "100%",
            }}
          >
            Answer:
            <br /> {answer}
          </h2>
        </div>
      </div>
      <div className="user-input-outer-container">
        <div className={`user-input-container ${answeredCorrectly}`}>
          <h3>Guess the answer here:</h3>
          <form action="">
            <input
              type="text"
              id="answer-input-area"
              value={inputFormValue}
              placeholder="Place Your Answer Here ..."
              onChange={handleChange}
            />
          </form>
          <button
            onClick={handleSubmit}
            className="button submit submit-guess"
            style={{
              padding: "10px 20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Submit Guess
          </button>
        </div>
        <h2 className="answer-space">
          Answer:{" "}
          <span id="initial-question" className="">
            {" "}
            Let's See what you know 🤔{" "}
          </span>
          <span id="eval-after-submit-correct" className="hidden">
            Well Done!👏
          </span>
          <span id="eval-after-submit-wrong" className="hidden">
            Try Again 😔
          </span>
        </h2>
      </div>
      <div className={`nav-container`}>
        <button
          onClick={showPrevQuestion}
          style={{
            padding: "10px 20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          👈Prev Question
        </button>
        <button
          onClick={showNextQuestion}
          style={{
            padding: "10px 20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Next Question 👉
        </button>
      </div>
    </div>
  );
};

export default Qcard;
