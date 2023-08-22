import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increaseNumber() {
    setCount(count + 1);
  }

  function decreaseNumber() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function resetNumber() {
    setCount(0);
  }

  function inputPositive(e) {
    if(!isNaN(parseInt(e.target.value)) && e.target.value >= 0){
      setCount(e.target.value)
    }
    console.log(parseInt(e.target.value))
  }

  

  return (
    <>
      <section>
        <div className="inputValue">
          <span>{count}</span>
        </div>
        <div>
          <button className="btn" onClick={decreaseNumber}>
            -
          </button>
          <button className="btn" onClick={increaseNumber}>
            +
          </button>
        </div>
        <div>
          <button className="reset" onClick={resetNumber}>
            reset
          </button>
        </div>
        <div>
          <label className="priceInput">Price Input: </label>
          <input
            type="number"
            placeholder="Place New Count"
            onChange={inputPositive}
          />
        </div>
        <div className="boxed">
          <h2>I can display dynamically the price change</h2>
          <p>{count}</p>
        </div>
      </section>
      <br />
      <hr />
      <hr />
      <hr />
    </>
  );
}

export default Counter;
