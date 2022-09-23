import styled from "styled-components";


function Bizxaqimizda() {
    return (
      <Wrapper>
              <p>- Ko'proq Ma'lumot Olish</p>
              <h1>Biz haqimizda barchasi</h1>
                 
      </Wrapper>

    )
}

export default Bizxaqimizda;


const Wrapper = styled.div`
       width: 100%;
       height: calc( 100vh - 91px )   ;
       background-color: #5e6973;
          
          p{
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 30px;

            color:rgb(251 146 60);
          }
          

          h1 {
              font-family: 'Poppins';
              font-style: normal;
              font-weight: 600;
              font-size: 50px;
              line-height: 75px;
              color: #fff;
          }    
`;