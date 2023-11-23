import { useState } from "react";
// import data from "./Home";
const Questions = () => {
  const [checked, setChecked] = useState(undefined);
  const question = data[0];
  const onSelect = () => {
    console.log("clicked at on Select ");
  };
  return (
    <div className="questions">
      <h2 className="text-light">{question.question}</h2>
      <ul key={question.id}>
        {question.options.map((q, i) => {
          <li key={i}>
            <input
              type="radio"
              value={true}
              name="options"
              id={`q${i}-option`}
              onChange={onSelect()}
            />
            <label className="text-primary" htmlFor={`q${i}-option`}>
              {q}
            </label>
            <div className="check"></div>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default Questions;
