import { useState } from "react";
import styled from "styled-components";
import logo from "../rasmlar/logo.png"
import Afisha from "./afisha";
import Corusel from "./corusel";
import Kategoriyalar from "./kategoriyalar";
import savat from "../rasmlar/savat.webp"
import Boshsahifa from "./boshsahifa";
import Ecx from "../rasmlar/close-outline.svg"
import Menyu from "../rasmlar/list-outline.svg"

function Navbar() {
 const [show, setshow] = useState(false)
 const [bgcolor , setbgcolor] = useState(false)
 const [menyu , setmenyu  ] = useState(false)

function Boshsaxifa(event) {
      // console.log(event)  
}
function Bizxaqimizda() {
     const  link = document.querySelector(".bizxaqimizda")
      link.style.color = "#000"
     setbgcolor(true)
}


    return(
        <Wrapper>

                <div>
                    {/* <Box>
                       <img src={Ecx}   alt="" srcset=""  />
                       <img src={Menyu} alt="" srcset="" />   
                    </Box> */}
                     
                <Links>

                    <a href="/"  onClick={Boshsaxifa}>  Boshsahifa</a>
                    <a href="#" onClick={() => setshow(true)
                      } >Kategoriyalar   </a>
                    <a href="bizhaqimizda" className="bizhaqimizda" onClick={Bizxaqimizda} >Bizhaqimizda</a>
                    <a href="http://">Aloqa</a>
                   
                     <a href="olindi" className="savatcha"><img src={savat} alt="" srcset="" /></a> 
                </Links>
                   
                </div>
 
                 {show ? (<div onDoubleClick={() => setshow(false)}>
                  <Kategoriyalar />
                 </div>) : ""}

                    {menyu ? setmenyu(false) : ""}      

                        </Wrapper>
    )
}

export default Navbar;
const Wrapper = styled.div`
      width: 100%;  
      height: 91px;
      background-color: #726c6c;
      
     div{
        display: flex;
        width: 100%;
     }

     @media (max-width: 300px) {
          width: 100%;
          height: 30px;
          background-color: #726c6c;

          div {
            display: flex;
            width: 100px;
          }
     }

`;
const Box = styled.div`
           
         @media (max-width: 300px) {
       
          img {  
           position: absolute;  
           width: 10px;
           height: 10px;
      }   

         }



       img {  
         position: absolute;  
         width: 50px;
         height: 50px;
      }
      
  .logoimg {
        /* padding: 5px 0 5px 20px; */
        /* width: 80px; */
        /* height: 80px; */
        /* margin-right: 50px; */
      }

`;
const Links = styled.div`
           /* margin: 30px 0; */
           position: relative;
           top: 30px;

               a {
                position: relative;
                left: 20px;
                /* top: 20px; */

                text-decoration: none;
                color: #fff;
                padding-right: 20px;
                font-style: normal;
                font-weight: 700;
                font-size: 22px;
                line-height: 27px;
               }
               a:hover {
                  color: red;
                  font-weight: 900;
                  /* font-size: 25px; */
                /* line-height: 30px; */
                }
               .savatcha {
                
               }
               img {

                    width: 40px;    
                    height: 40px;
                    overflow: hidden;
               }

                @media (max-width: 300px) {
                    /* margin: 10px 0; */
                       position: relative;
                       top: 5px;
                    
                    a {
                       position: relative;
                       left: 4px;

                      text-decoration: none;
                      color: #fff;
                      padding-right: 8px;
                      font-style: normal;
                      font-weight: 700;
                      font-size: 12px;
                      line-height: 16px;
               }
                     img {
                      width: 16 px;
                      height: 18px;
                      overflow: hidden;

                     }
                }
`;

