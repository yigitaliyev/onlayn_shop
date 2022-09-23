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
         /* background-color: yellow; */
          /* display: flex; */
          margin: auto;
          justify-content: center;
          /* z-index: -2; */

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
           
`;