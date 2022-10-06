import { useState } from "react";
import styled from "styled-components";
import Carts from "../companents/carts";
import Products from "../container/products";

function Shop( {handleClick} ) {
  
    return (
      <Wrapper>

                <Products  handleClick = {handleClick} />
                 
      </Wrapper>

        
    )
}
export default Shop;





const Wrapper = styled.div`
    
`;

