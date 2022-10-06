import Navbar from "./companents/navbar";
import Shop from "./container/shop";
import { useSelector, useDispatch } from 'react-redux'
import { Route, Routes } from "react-router-dom"
import styled from "styled-components";
import Carts from "./companents/carts";
import Bizxaqimizda from "./companents/bizxaqimizda";
import Boshsahifa from "./companents/boshsahifa";
import { useEffect, useState } from "react";
import Corusel from "./companents/corusel";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setcart] = useState([]);

  const handleClick = (product) => {
    if (cart.indexOf(product) !== -1) return;
    setcart([...cart, product]);
  };

  const handleChange = (product, d) => {
    const ind = cart.indexOf(product);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setcart([...arr]);
  };
  return (
    <Appp>

      <Navbar setshow={setShow} size = {cart.length} />
      <Routes>
        <Route path="/servisanjomlari" element={<Shop handleClick= {handleClick} />} />,
        <Route path="/olindi" element={<Carts cart ={cart} setcart={setcart} handleChange = {handleChange} />} />,
        <Route path="/" element={<Boshsahifa />} />
        <Route path="/bizhaqimizda" element={<Bizxaqimizda />} />
      </Routes>

      
    </Appp>
  );
}



export default App;

const Appp = styled.div`
      background-color: #5e6990;
      /* width: 100%; */
       /* max-height: 100vh; */
`;
