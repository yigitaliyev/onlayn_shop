import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import styled from "styled-components";
import savarta from "../rasmlar/savat.webp"
import logo from "../rasmlar/logo.png"
import Ongga from "../rasmlar/strelka.svg"
import { Link } from "react-router-dom";

function Navbar( {size}) {
   const [burger_class, setburgerclass] = useState("burger-bar unclicked")
   const [menu_class, setmenuclass] = useState("menu hidden")
   const [isMenuClicked, setisMenuClicked] = useState(false)
   const [hide, sethide] = useState(false)


   function updatemenu() {
      if (!isMenuClicked) {
         setburgerclass("burger-bar clicked")
         setmenuclass("menu visibele")
      } else {
         setburgerclass("burger-bar unclicked")
         setmenuclass("menu hidden")
      }
      setisMenuClicked(!isMenuClicked)
   }
   function destroy() {
      if (!isMenuClicked) {
         setburgerclass("burger-bar clicked")
         setmenuclass("menu visibele")
      } else {
         setburgerclass("burger-bar unclicked")
         setmenuclass("menu hidden")
      }
      setisMenuClicked(!isMenuClicked)
   }

   return (
      <Wrapper>
         <nav>
            <div className="burger-menu" onClick={updatemenu}>
               <div className={burger_class}></div>
               <div className={burger_class}></div>
               <div className={burger_class}></div>
            </div>
            <Link to="/olindi"><img src={savarta} alt="" srcset="" /> </Link>
               <span>{size}</span>
               {/* <img className="logo" src={logo} alt="" /> */}
         </nav>

         <div className={menu_class}>
            <div className="links">
               <Link to="/" onClick={destroy}>Bosh sahifa </Link>
               <Link to="#" onClick={() => sethide(true)} > Katogoritalar <img className="onnga" src={Ongga} alt="" srcset="" /></Link>
               <Link to="/bizhaqimizda" onClick={destroy}> Biz haqimizda </Link>
               <Link to="#"> Aloqa </Link>
            </div>


            {hide ? (<div className="kategoriyalar">
               <div>
                  <Link to="/servisanjomlari" onClick={destroy}>Servis anjomlari</Link>
               </div>

            </div>) : ""}
         </div>
      </Wrapper>
   )
}

export default Navbar;
const Wrapper = styled.div`
      width: 100%;
      /* height: 100vh; */
      z-index: 5;
      .logo {
            width: 50px;
            height: 50px;
         
         }  
      nav {
         width: 100%; 
         height: 80px;
         background-color: #d59090;
         display: flex;
         justify-content: flex-start;
         padding: 16px; 
         /* z-index: -1; */

         img {
            width: 40px;
            height: 40px;
            position: absolute;
            left: 95%;
            background-color: #d59090;
            color: #d59090;
         }
      
         span{
            position: absolute;
            left: 97.5%;
            padding: 0 2px;
            border: 1px solid red;
            background-color: red;
            border-radius: 10px;
            color: white;

         }
      }
      .burger-menu {
         height: 100%;
         width: 64px;
         display: flex;
         flex-direction: column;
         align-items: flex-start;
         justify-content: space-between;
         cursor: pointer;
         /* background-color: red; */
      }
      .burger-bar {
         width: 64px;
         height: 8px;
         background-color: white;
         border-radius: 8px;

      }
      .menu {
          width: 70%;
          height: calc(100vh - 80px)  ;
          background-color: yellow;
          position :absolute ;
          /* padding-top: 100px ; */
          margin-top: 80px;
          top: 0;
          z-index: 2 ;
          transition: 2s;
      }
      .links {
          position: absolute;
          top: 10%;
          left: 20%;
          transition: 2s;
          
          a {
            display: flex;
            padding-top: 40px;
            text-decoration: none;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 800;
            font-size: 30px;
            line-height: 30px;
            color: black;
          }
          .onnga {
            position: absolute;
            top: 42%;
            left: 100%;
            width: 20px;
            height: 20px;
            margin-right: 20px;
            color: red ;
          }
      }

      .kategoriyalar {
         position: absolute;
         top: 26%;
         left: 40%;
         /* display: none; */

         a{
            border: none;
            text-decoration: none;
            color: black;
            background-color: yellow;
            cursor: pointer;
            font-family: 'Work Sans';
            font-style: normal;
            font-weight: 600;
            font-size: 30px;
            line-height: 120%;
            text-align: center;
         }
      }

      .hidden {
         display: none;
      }
      .visible {
          display: inherit;
      }
      .burger-bar.clicked:nth-child(1) {
         transform: rotate(45deg) translate(12px , 20px);
        transition: ease-out 0.5s;
      }
      .burger-bar.clicked:nth-child(2) {
         transform: scale(0.1);
        transition: ease-out 0.5s;
      }
      .burger-bar.clicked:nth-child(3) {
         transform: rotate(135deg) translate(-8px , 16px);
        transition: ease-out 0.5s;
      }
      .burger-bar.unclicked {
         transform: rotate(0) translate(0);
         transition: cubic-bezier(0.075, 0.82, 0.165, 1) 2s;
      }   
             

`;
