import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import "../companents/carts.css"


 function Carts( { cart, setcart, handleChange}) {
    const [price, setPrice] = useState(0);

    const handleRemove = (id) => {
      const arr = cart.filter((product) => product.id !== id);
      setcart(arr);
      handlePrice(arr);
    };
  
    const handlePrice = () => {
      let ans = 0;
      cart.map((product) => (ans += + product.amount * product.price));
      setPrice(ans);
    };
  
    useEffect(() => {
        handlePrice();
    });
    return (
    <Wrapper>
            <h2>Siz olgan mahsulotlar</h2>
             {cart.map((product) => (
        <div className="cart_box" key={product.id}>
          <div className="cart_img">
            <img src={product.image} alt="" />
            {/* <p>{product.info}</p> */}
          </div>
          <div>
            <button onClick={() => handleChange(product, 1)}>+</button>
            <button>{product.amount}</button>
            <button onClick={() => handleChange(product, -1)}>-</button>
          </div>
          <div>
            <span>{product.price}</span>
            <button onClick={() => handleRemove(product.id)}>O'chirish</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Olgan mahsulotlaringizni umumiy narxi:</span>
        <span>{price}</span>
      </div>
    </Wrapper>
    )
}
export default Carts;

const Wrapper = styled.div`
             width: 100%;
             height: calc(100vh - 91px);
`;