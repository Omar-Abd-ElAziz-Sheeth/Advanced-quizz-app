import logo from "../assets/brain.svg";
import qestion from "../assets/question.svg";
import timer from "../assets/timer.svg";
import trophy from "../assets/trophy.svg";
import { Link } from "react-router-dom";
import { motion, scale } from "motion/react";
const Start = () => {
  return (
    <div className="bg-white w-11/12 min-h-[450px] mx-auto  shadow-2xl rounded-xl py-10 flex flex-col items-center text-center main">
      <img className="rounded-full  w-14 " src={logo} alt="logo image" />
      <h1 className="text-[1.6rem] font-bold">تحدي المعلومات العامة</h1>
      <p className="abstract my-2 max-w-11/12">
        اختبر معلوماتك العامة وجاوب على الأسئلة في جميع المجالات، الجغرافيا،
        التاريخ، الهندسة، الرياضة، أسئلة ذكاء، وأسئلة أكثر بكتير.
      </p>
      <div className="cards-container mt-5 min-w-11/12">
        <motion.div
          className="card"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <img src={qestion} alt="" />
          <p className="card-number">10</p>
          <p>أسئلة</p>
        </motion.div>

        <motion.div
          className="card"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <img src={timer} alt="" />
          <p className="card-number">5</p>
          <p>دقايق</p>
        </motion.div>

        <motion.div
          className="card"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <img src={trophy} alt="" />
          <p className="card-number">100%</p>
          <p>النتيجة</p>
        </motion.div>
      </div>

      <div className="tips mt-10  bg-[var(--text)] py-5">
        <h2 className="text-[1.2rem] font-bold">تعليمات :</h2>
        <ol className="py-5">
          <li>
            <span>1</span>كل سؤال ليه أكتر من إجابة اختار الإجابة الصح
          </li>
          <li>
            <span>2</span>معاك خمس دقائق تحل فيهم الأسئلة كلها
          </li>

          <li>
            <span>3</span>بعدما تختار إجابة، هيبان إذا كانت الإجابة صح أو غلط
          </li>

          <li>
            <span>4</span>في مفاجأة هتظهر في النهاية لكل اللي هيجاوب على كل
            الأسئلة صح
          </li>
        </ol>
      </div>
      <Link to="/quiz">
        <button className="bg-linear-to-b from-cyan-500 to-blue-500 py-5 px-8 rounded-2xl shadow text-white font-bold cursor-pointer my-2 mt-4 hover:scale-105 transition">
          ابدأ التحدي
        </button>
      </Link>
    </div>
  );
};

export default Start;
