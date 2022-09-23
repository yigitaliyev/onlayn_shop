import { useState } from "react";
import styled from "styled-components";
import Carts from "../companents/carts";
import Products from "../container/products";

function Shop(props) {
  const [cart , setcart] = useState({
    products: [],
    totalPrise: 0,
  })
  function addToCart(id) {
    const data = {
      id: id,
      count:1
    }   
    const copyState = {...cart};
    copyState.products.push(data)
    setcart(copyState)
    }    
    function changecount(action , id) {
      const staytCopy ={...cart}
      const index = cart.products.findIndex(product => product.id ===id);
      
      if(action === "+") {
        staytCopy.products[index].count +=1
      }else{
        staytCopy.products[index].count -=1
        
      }
      setcart(staytCopy)
    } 
    console.log(cart)
    return (
      <Wrapper>
                 
                <Products  addToCart = {addToCart}/>
                <Carts CartsData = {cart}  changecount ={changecount}/>
            </Wrapper>

        
    )
}
export default Shop;





const Wrapper = styled.div`
      display: grid;
      /* padding-left: 150px; */
      background: #ADADAD;
    
     
    
`;

