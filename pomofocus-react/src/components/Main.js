import MainBtn from './MainBtn';

const Main = ({ sec, min }) => {
  return (
    <div className="main">
      <div className="main-buttons">
        <MainBtn text="Pomodoro" />
        <MainBtn text="Short Break" />
        <MainBtn text="Long Break" />
      </div>

      <div className="main-counter">
        <h1 className="counter">{`${min}:${sec}`}</h1>
      </div>

      <div className="start-stop">
        <button className="btn start-btn">Start</button>
      </div>
    </div>
  );
};

export default Main;
