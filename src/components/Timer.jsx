import React from "react";
import timerIcon from "../assets/timer-green.svg";
import { useEffect, useState } from "react";

const Timer = ({ nextQuestionHandle, currentQuestion, duration }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    setTimeLeft(duration);
  }, [currentQuestion, duration]);

  useEffect(() => {
    if (timeLeft <= 0) {
      nextQuestionHandle();
      return;
    }

    const timeOut = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timeOut);
  }, [timeLeft, nextQuestionHandle]);

  return (
    <p
      className="text-center text-[#40db34] font-bold text-xl flex gap-1 justify-center  w-fit mx-auto py-2 px-3 rounded-2xl"
      key={Math.random()}
    >
      <span>
        <img src={timerIcon} alt="" className="w-7 " />
      </span>
      {timeLeft}:00
    </p>
  );
};

export default Timer;
