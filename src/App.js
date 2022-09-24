import Navbar from "./companents/navbar";
import Shop from "./container/shop";
import { useSelector, useDispatch } from 'react-redux'
import { Route , Routes } from "react-router-dom"
import styled from "styled-components";
import  Carts  from "./companents/carts";
import Bizxaqimizda from "./companents/bizxaqimizda";
import Boshsahifa from "./companents/boshsahifa";
import { useState } from "react";

function App(  ) {
  //  console.log(image, Name, info, price, id)
  return (
    <Appp>
         
      <Navbar />
      <Routes>
         <Route  path="/servisanjomlari" element={<Shop   />}/>,
         <Route path="/olindi"  element = {<Carts   />} />,
         <Route path="/" element = {<Boshsahifa />} />
         <Route path = "/bizhaqimizda" element = {<Bizxaqimizda />}/>
      </Routes>

    </Appp>
  );
}



export default App;
 
const Appp = styled.div`
      background-color: #5e6990;
    
`;
