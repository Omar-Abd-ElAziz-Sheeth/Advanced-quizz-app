import rightArrow from "../assets/white-arrow-rightsvg.svg";
import leftArrow from "../assets/arrow-left-blue-com.svg";
import { Link } from "react-router-dom";
import wrongIcon from "../assets/wrong.svg";
import correctIcon from "../assets/correct.svg";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
const correctQuotes = [
  "عاش يا بطل !😎",
  "الله ينور ❤️",
  "✔️ايه الشطارة دي كلها",
];

const wrongQuotes = [
  "ركز شوية ياباشا 👀",
  "جرب تاني يمكن تزبط ✌️",
  "شد حيلك كده وخليك صاحي 💪",
];

const Qustions = ({
  questions,
  currentQuestion,
  nextQuestionHandle,
  handlePreviousQuestion,
  handleSelectedAnswer,
  selectedAnwser = undefined,
  clicked,
  result,
}) => {
  const { question, answers, correctAnswer, explanation } = questions;

  const navigate = useNavigate();
  return (
    <motion.div
      className="w-full bg-white shadow-lg rounded-2xl flex flex-col items-center  py-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      key={Math.random()}
    >
      <h2 className="text-2xl font-bold my-5 w-11/12 text-center">
        {question}
      </h2>
      <ul className="answers-list w-11/12 mx-auto ">
        {answers.map((answer) => {
          const isSelected = selectedAnwser === answer;
          const isCorrect = isSelected && answer === correctAnswer;
          const isWrong = isSelected && answer !== correctAnswer;
          return (
            <button
              key={Math.random()}
              onClick={() => handleSelectedAnswer(answer)}
              className={` ${isCorrect ? "correctAnswer" : ""}
              ${isWrong ? "wrongAnswer" : ""} block w-full text-right `}
              disabled={clicked}
            >
              <p className="flex justify-between">
                {answer}
                {isCorrect && <img src={correctIcon} alt="" className="w-5" />}
                {isWrong && <img src={wrongIcon} alt="" className="w-5" />}
              </p>
            </button>
          );
        })}
      </ul>

      {selectedAnwser && (
        <div
          className={`mx-auto w-11/12 rounded-md p-3 border-2 ${
            selectedAnwser === correctAnswer
              ? "border-green-400 bg-green-50"
              : "border-red-400 bg-red-50"
          }`}
        >
          <h2>
            {selectedAnwser === correctAnswer
              ? correctQuotes[Math.round(Math.random()) * 2]
              : wrongQuotes[Math.round(Math.random()) * 2]}
          </h2>
          <h2 className="font-bold">الحل : </h2>
          <p>{explanation}</p>
        </div>
      )}
      <div className="flex justify-between gap-2 w-11/12 my-5">
        {currentQuestion < 9 ? (
          <>
            <button
              className="flex  items-center    py-2 px-4 bg-blue-500 rounded-2xl text-white font-medium cursor-pointer"
              onClick={nextQuestionHandle}
            >
              <span>
                <img src={rightArrow} className=" w-7" alt="" />
              </span>
              التالي
            </button>

            <button
              className="flex  items-center    py-2 px-4 bg-gray-200 rounded-2xl text-blue-500 font-medium cursor-pointer"
              onClick={handlePreviousQuestion}
            >
              السابق
              <span>
                <img src={leftArrow} className=" w-7" alt="" />
              </span>
            </button>
          </>
        ) : (
          <button
            onClick={() => navigate("/Result", { state: { score: result } })}
            className="bg-linear-to-b from-cyan-500 to-blue-500 py-5 px-8 rounded-2xl shadow text-white font-bold cursor-pointer my-2 mt-4 hover:scale-105 transition mx-auto "
          >
            شوف نتيجك
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default Qustions;
