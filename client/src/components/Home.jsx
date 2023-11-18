import { useRef } from "react";
import { Link } from "react-router-dom";
import Quiz from "./Quiz";

const Home = () => {
  const inputRef = useRef(null);
  console.log(inputRef);
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
      <ol>
        <li>
          Users may do not need to register or log in to participate in the
          quiz.
        </li>
        <li>Participants are allowed multiple attempts.</li>
        <li>The quiz must be completed within 10 minutes.</li>
        <li>You will be asked 10 questions one after another.</li>
        <li>Questions are presented in multiple-choice/true-false format.</li>
        <li>To pass, participants must achieve a minimum score of 7 points.</li>
        <li>The results will be declared at the end of the quiz.</li>
      </ol>
      <form id="form">
        <input ref={inputRef} type="text" placeholder="Username*" />
      </form>
      <div className="start">
        <Link to={"quiz"} className="btn">
          Start Quiz
        </Link>
      </div>
    </div>
  );
};

export default Home;
