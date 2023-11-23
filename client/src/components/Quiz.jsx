import Questions from "./Questions";
const Quiz = () => {
  const onNext = () => {
    console.log("Click on next btn");
  };

  const onPrev = () => {
    console.log("Click on prev btn");
  };
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
      {/* display questions */}
      <Questions />
      <div className="grid">
        <button className="btn prev" onClick={onPrev}>
          Prev
        </button>
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
