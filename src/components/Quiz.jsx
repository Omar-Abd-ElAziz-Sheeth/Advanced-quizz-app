import { useState } from "react";
import ProgressBar from "./ProgressBar";
import Qustions from "./Qustions";
import questions from "../data/questions";
import { useNavigate, Link } from "react-router-dom";

const correctSounds = ["/sounds/correct1.mp3", "/sounds/correct2.mp3"];
const wrongSounds = [
  "/sounds/wrong1.mp3",
  "/sounds/wrong2.mp3",
  "/sounds/wrong3.mp3",
];

const playSound = (soundArray) => {
  const randomIndex = Math.floor(Math.random() * soundArray.length);

  const audio = new Audio(soundArray[randomIndex]);
  audio.play();
};

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnwser, setSelectedAnswer] = useState("");
  const [result, setResult] = useState(0);

  const [clicked, setClicked] = useState(false);

  const handleSelectedAnswer = (option) => {
    setSelectedAnswer(option);

    const isCorrect = option === questions[currentQuestion].correctAnswer;

    if (isCorrect) {
      setResult(result + 1);

      playSound(correctSounds);
    } else {
      playSound(wrongSounds);
    }
    setClicked(true);
  };

  const nextQuestionHandle = () => {
    if (currentQuestion >= questions.length - 1) {
      return navigate("/Result", { state: { score: result } });
    }
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer("");
    setClicked(false);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion < 1) {
      return;
    }
    setCurrentQuestion(currentQuestion - 1);
    setSelectedAnswer("");
  };

  const navigate = useNavigate();

  return (
    <div className="quiz w-full p-5 flex flex-col items-center gap-0">
      <ProgressBar
        currentQuestion={currentQuestion}
        nextQuestionHandle={nextQuestionHandle}
      />
      <Qustions
        questions={questions[currentQuestion]}
        currentQuestion={currentQuestion}
        nextQuestionHandle={nextQuestionHandle}
        handlePreviousQuestion={handlePreviousQuestion}
        handleSelectedAnswer={handleSelectedAnswer}
        selectedAnwser={selectedAnwser}
        clicked={clicked}
        result={result}
      />
    </div>
  );
};

export default Quiz;
