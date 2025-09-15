import Timer from "./Timer";

const ProgressBar = ({ currentQuestion, nextQuestionHandle }) => {
  const progress = (currentQuestion + 1) * 10;

  return (
    <div className="bg-white w-full mx-auto p-4 shadow-lg mb-6 min-h-full rounded-xl ">
      <div className="flex justify-between gap-2 items-center">
        <span>
          سؤال <b>{currentQuestion + 1}</b> من <b>10</b>
        </span>

        <b>{progress}%</b>
      </div>
      <div
        style={{ width: `${progress}%` }}
        className={`mt-5 bg-gradient-to-b from-cyan-500 to-blue-500  h-4   transtion-all duration-500 `}
      ></div>
      <Timer
        nextQuestionHandle={nextQuestionHandle}
        currentQuestion={currentQuestion}
        duration={30}
      />
    </div>
  );
};

export default ProgressBar;
