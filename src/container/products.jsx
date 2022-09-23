import { useState } from "react";
import styled from "styled-components";
import InputSeorch from "../companents/inputSeorch";
import Product from "../companents/product";
import { products} from "../data/prodectArray"


function Products({addToCart}) {
    
const [seorch, setseorch] = useState("")  
    return(

        <Wrapper>
             <InputSeorch   seorchProducts={({target}) => setseorch(target.value)}/>
             
                <Staylddiv>
                       {products.filter((products) => products.Name.toLowerCase().includes(seorch.toLocaleLowerCase()))
                       .map(product =>
                        <Product key={product.id} {...product}  addToCart={addToCart}/>)}    
              </Staylddiv>
             
        </Wrapper>
    )
}

export default Products;

const Wrapper= styled.div`
             margin: auto;
            `;
const Staylddiv = styled.div`
                display: grid;
                grid-template-columns: repeat(6,180px);
                gap: 30px;
                flex-shrink: 0;
`; 