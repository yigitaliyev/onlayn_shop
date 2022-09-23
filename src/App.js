import Navbar from "./companents/navbar";
import Shop from "./container/shop";
import { useSelector, useDispatch } from 'react-redux'
// import { useRef } from "react";
import { Route , Routes } from "react-router-dom"
import styled from "styled-components";
import  Carts  from "./companents/carts";
import Bizxaqimizda from "./companents/bizxaqimizda";
import Boshsahifa from "./companents/boshsahifa";
// import { products } from "../data/prodectArray";

function App( {cart}) {
  const count = useSelector(function (store) {
    // console.log(store.todos.todo)
    return store.todos.todo;
  })

  // console.log(cart)
  return (
    <Appp>
     
      <Navbar />
      {/* <Carts /> */}
      <Routes>
         <Route  path="/servisanjomlari" element={<Shop />}/>,
         <Route path="/olindi"  element = {<Carts />} />,
         <Route path="/" element = {<Boshsahifa />} />
         <Route path = "/bizhaqimizda" element = {<Bizxaqimizda />}/>
      </Routes>
      {/* <Carts /> */}
    </Appp>
  );
}



export default App;
 
const Appp = styled.div`
      background-color: #5e6990;
    
`;
