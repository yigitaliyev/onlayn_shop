import { useState } from "react";
import styled from "styled-components";
import Carts from "../companents/carts";
import Products from "../container/products";

function Shop() {
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
  
    return (
      <Wrapper>
                 
                <Products  addToCart={addToCart}/>
            </Wrapper>

        
    )
}
export default Shop;





const Wrapper = styled.div`
     
     
    
`;

