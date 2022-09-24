import { useState } from "react";
import styled from "styled-components";
import logo from "../rasmlar/logo.png"
import Afisha from "./afisha";
import Corusel from "./corusel";
import Kategoriyalar from "./kategoriyalar";
import savat from "../rasmlar/savat.webp"
import Boshsahifa from "./boshsahifa";

function Navbar() {
 const [show, setshow] = useState(false)
 const [bgcolor , setbgcolor] = useState(false)
 

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

                      <img className="logoimg" src={logo} alt="" srcset="" />
                
                <Links>

                    <a href="/"  onClick={Boshsaxifa} >Bosh sahifa</a>
                    <a href="#" onMouseEnter={() => setshow(true)
                      } >Kategoriyalar</a>
                    <a href="bizhaqimizda" className="bizhaqimizda" onClick={Bizxaqimizda} >Biz haqimizda</a>
                    <a href="http://">Aloqa</a>       
                </Links>
                   <Savatcha>
                     <a href="olindi"><img src={savat} alt="" srcset="" /></a> 
                   </Savatcha>
                </div>
 
                 {show ? (<div onMouseLeave={() => setshow(false)}>
                  <Kategoriyalar />
                 </div>) : ""}
                    
                 {/* {bgcolor ? ( color = "red") : ""} */}

                   {/* <Boshsahifa />          */}
        </Wrapper>
    )
}

export default Navbar;
const Wrapper = styled.div`
      width: 100%;  
      height: 91px;
      background-color: #726c6c;
      .logoimg {
        padding: 5px 0 5px 20px;
        width: 80px;
        height: 80px;
        margin-right: 50px;
      }
     div{
        display: flex;
        width: 100%;
     }

`;
const Links = styled.div`
           margin: 30px 0;
               a {
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

`;

const Savatcha = styled.div`
            display: flex;
            justify-content: flex-end;
            padding: 20px  20px 0 0  ;
 
            img {
                    width: 40px;
                    height: 40px;
                    overflow: hidden;
                  }
`;
