import styled from "styled-components";


function Afisha() {
    return(
          <Wrapper>
                   <h1>
                      <span className="a">  Biz xaridingiz uchun, </span>   <br/>
                      <span> Eng Yaxshi</span>  <br/>
                       <span>Mahsulotlarimizni Taklif</span> <br/> 
                       <span>Qilamiz</span>                        
                   </h1>
          </Wrapper>

    )
}

export default Afisha;


const Wrapper = styled.div`
          margin: auto;
          justify-content: center;

          h1 {
            font-family: 'Space Grotesk';
            font-style: normal;
            font-weight: 700;
            font-size: 53px;
            line-height: 68px;

            color: #fff;
          }
          .a{
            color: #9e3030;
          }

          @media(max-width: 300px) {
                          
            
             h1 {
              color: yellow;
              font-weight:400 ;
              font-size: 20px ;
              line-height: 20px;
            color: #fff;
              

             }
            
            }
           
`;