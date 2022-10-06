import styled from "styled-components";
import Afisha from "./afisha";
import Corusel from "./corusel";
import data from "./datacorusel";


function Boshsahifa() {
    return(
        <Wrapper>
                
                          <Afisha />
                          {/* <Corusel  images = { data } /> */}
                
        </Wrapper>
    )
}
export default Boshsahifa;

const Wrapper = styled.div`
     
     width: 100%;
     height: calc( 100vh - 80px);
      /* position: absolute; */


`;
