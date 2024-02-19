import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "./state/counterSlice";
import { RootState } from "./state/store";


function App() {
  const {counterValue,totalAmount} = useSelector((state: RootState) => state.counter);
  // const total = useSelector((state : RootState))
  const dispatch = useDispatch();

  return (
    <>
      <h1>World's greatest Counter</h1>
      <div className="card">
       
        <div className="inputSelector">
          <input
            className="sliderInput"
            type="range"
            name="sliderinput"
            min={10}
            max={50}
            step={5}
            value={counterValue}
            onChange={(e) =>
              dispatch(counterActions.increaseVal(Number(e.target.value)))
            }
          />
          <input
            className="boxInput"
            type="number"
            name="boxInput"
            min={10}
            max={50}
            value={counterValue}
            onChange={(e) =>
              dispatch(counterActions.increaseVal(Number(e.target.value)))
            }
          />
        </div>
        <button>count is</button>
        <h3>2 x input value = {totalAmount}</h3>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
