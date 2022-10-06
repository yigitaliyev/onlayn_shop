import { useState } from "react";
import {  FiChevronRight ,FiChevronLeft } from 'react-icons/fi' 
import { FaQuoteRight} from 'react-icons/fa'
import "./corusel.css"

  function Corusel( { images } ) {

    return (
        <div className="corousel-container">
          <div className="corousel-btn left-btn"/>
          <div className="corousel-btn right-btn"/>

                  <div className="corousel" >
                      {images.map(img  => (
                        <div className="corousel-item">
                           <img src={img.image} className="imgs" alt = "nima gap"/>
                        </div>
                      ))}
                  </div>


       </div>
     

    )

  }

export default Corusel;

