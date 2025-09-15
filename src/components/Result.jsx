import React from "react";
import trophy from "../assets/trophy-2.svg";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
const Result = () => {
  const location = useLocation();
  const { score } = location.state || { score: 0 };

  console.log(score);
  const { width, height } = useWindowSize();
  return (
    <div className="bg-white w-11/12 min-h-[450px] mx-auto  shadow-2xl rounded-xl py-10 flex flex-col items-center text-center mt-30 overflow-hidden">
      <img className="w-30" src={trophy} alt="" />
      <div>
        <h3>
          <span>
            أنت جاوبت <b>{score}</b> أسئلة صح !
          </span>
          من <b>10</b>
        </h3>
      </div>
      <h4>
        <span>بنسبة</span> <b>%{score}0</b>
      </h4>
      <p>
        {score > 8 && <span>🎉 ممتاز! إنت جاوبت أغلب الأسئلة صح</span>}
        {score > 5 && score <= 8 && (
          <span>👌 كويس جداً، محتاج بس شوية مراجعة</span>
        )}
        {score > 2 && score <= 5 && <span>🙂 لسه محتاج تدريب أكتر</span>}
        {score <= 2 && <span>😅 حاول تذاكر وتعيد المحاولة</span>}
      </p>

      {score < 10 && (
        <Link to={"/"}>
          <button className="bg-linear-to-b from-cyan-500 to-blue-500 py-5 px-6 rounded-2xl shadow text-[15px] text-white font-bold cursor-pointer my-2 mt-10 hover:scale-105 transition mx-auto ">
            اعادة المحاولة
          </button>
        </Link>
      )}
      <Confetti width={width} height={height} />

      {score === 10 && (
        <Link to="/suprise">
          <button className="bg-linear-to-b from-cyan-500 to-blue-500 py-5 px-6 rounded-2xl shadow text-[15px] text-white font-bold cursor-pointer my-2 mt-10 hover:scale-105 transition mx-auto ">
            دوس للمفاجأة
          </button>
        </Link>
      )}
    </div>
  );
};

export default Result;
