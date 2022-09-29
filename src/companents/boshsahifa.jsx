import styled from "styled-components";
import Afisha from "./afisha";
import Corusel from "./corusel";


function Boshsahifa() {
    return(
        <Wrapper>
                
                          <Afisha />
                          {/* <Corusel /> */}
                
        </Wrapper>
    )
}
export default Boshsahifa;

const Wrapper = styled.div`
     margin: 20px 10px ;
     height: calc(100vh - 131px)  ;
     /* width: 50%; */
     /* gap: 20px; */
     background-color: #5e6973;
     display: flex;
     border: 1px solid #5e6973;
     border-radius: 40px;
     z-index: -3;

     @media(max-width: 300px) {
          background-color: red;
          display: block;
           margin: 10px 5px ;
           border-radius: 20px;


}
`;
