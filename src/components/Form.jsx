import {useState} from 'react'


function Formcheck() {
    const [price, setPrice] = useState("");
    const [product, setProduct] = useState({});


    function submitHandler(e) {
        e.preventDefault();
        setProduct({...product, price});
        console.log('here');
      }
    if(Object.keys(product).length){
      console.log(product);
    }
      
      function changePrice(e) {
        setPrice(e.target.value);
      }

    return(
        <section>
        <h1>Testing Form Knowledge</h1>
        <div>
          <div className="inputValue">
            <span>{price}</span>
          </div>
          <form onSubmit={submitHandler}>
            <input
              className="myInput"
              type="number"
              placeholder="Input Price"
              onChange={changePrice}
            />
            <button className="btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    )
}

export default Formcheck;