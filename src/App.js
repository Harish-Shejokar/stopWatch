import "./App.css";
import { useState } from "react";

function App() {
  const [On, setOn] = useState(false);
  const [hour, setHour] = useState("00");
  const [min, setMin] = useState("00");
  const [second, setSecond] = useState("00");
  const [Id, setId] = useState(null);
  const fun = (num) => {
    if (num >= 60) {
      // setMin((prev) => Number(prev) + 1);
      return "00";
    } else return num;
  };

  const startTimer = () => {
    setOn(true);
    const id = setInterval(() => {
      setSecond((prev) => {
        let num = Number(prev) + 1;
        if (num < 10) return "0" + num;
        else {
          const sec = fun(num);
          if (sec === "00") {
            setMin((val) => {
              let t = Number(val) + 1;
              if (t < 10) return "0" + t;
              else {
                const minute = fun(t);
                if (minute === "00") {
                  setHour((h) => {
                    let abc = Number(h) + 1;
                    if (abc < 10) return "0" + abc;
                    else return abc;
                  });
                }

                return minute;
              }
            });
          }
          return sec;
        }
      });
    }, 1000);
    setId(id);

    // setSecond((prev) => {
    //   return setInterval(() => {
    //     return prev + 1;
    //   }, 0);
    // });
  };

  const resetTimer = () => {
    setOn(false);
    clearInterval(Id);
    setHour("00");
    setMin("00");
    setSecond("00");
  };

  const stopTimer = () => {
    setOn(false);
    clearInterval(Id);
  };

  return (
    <div className="App">
      <h1>Stop Watch</h1>
      <div style={{ padding: "20px" }}>
        <span style={{ fontSize: "50px" }}>{hour}:</span>
        <span style={{ fontSize: "50px" }}>{min}:</span>
        <span style={{ fontSize: "50px" }}>{second}</span>
      </div>

      {!On ? (
        <button
          onClick={startTimer}
          style={{
            fontWeight: "bolder",
            margin: "0 5px",
            color: "white",
            backgroundColor: "rgb(0,100,0)",
            padding: ".5rem 1rem",
          }}
        >
          Start
        </button>
      ) : (
        <button
          onClick={stopTimer}
          style={{
            fontWeight: "bolder",
            margin: "0 5px",
            color: "white",
            backgroundColor: "red",
            padding: ".5rem 1rem",
          }}
        >
          Stop
        </button>
      )}
      <button
        onClick={resetTimer}
        style={{
          margin: "0 5px",
          fontWeight: "bolder",
          backgroundColor: "Yellow",
          padding: ".5rem 1rem",
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
