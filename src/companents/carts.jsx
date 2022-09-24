import { useSelector } from "react-redux";
import styled from "styled-components";



 function Carts(   ) {
     const product = useSelector(store => store.cart)
     console.log(product)
    return (
    <Wrapper>
             <h2>Card</h2>
                 
    </Wrapper>
    )
}
export default Carts;

const Wrapper = styled.div`
             width: 100%;
             height: calc(100vh - 91px);
`;