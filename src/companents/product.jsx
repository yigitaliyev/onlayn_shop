import styled from "styled-components";
import { ReactComponent as AddBtn} from "../rasmlar/Vector (2).svg"
import {  useDispatch, useSelector } from "react-redux"
import { addCart } from "../store/qatlam2";


   function Product(  {product, handleClick}) {
      const {image, Name, info, price, id } = product
    return (
        <Wrapper>
          <div className="imgbox">
            <img src={product.image} alt=""/>
          </div>     
          <h3>{product.Name}</h3>
          {/* <p>{product.info}</p>  */}
            
               <div className="save_btn">
                     <h3>{product.price}</h3>

                      <button onClick={() => handleClick(product)}>Savatchaga</button>  
               </div>

        </Wrapper>
    )
}

export default Product;

const Wrapper = styled.div`
         display: grid;
         gap: 2px;
         border: 2px solid black;
         width: 210px;
         height: 300px;
         border-radius: 10px;
         img {
            width: 100%;
            height: 100%;
            border-radius: 10px 10px 0 0;
            /* object-fit: fill; */
         }
         h3 {
                 
            width: 110px;
            height: 24px;
            font-family: 'Cabin';
            font-style: normal;
            font-weight: 600;
            font-size: 15px;
            line-height: 24px;
            color: #1A1F16;
         }
         p {
            width: 72px;
            height: 19px;
            font-family: 'Cabin';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 19px;
            letter-spacing: -0.02em;
            color: #60695C;
         }
         
         .imgbox {
             background-color: red;
            width: 100%;
            height: 200px;
            
         }

       .save_btn {
               /* display: flex; */
               /* gap: 50px; */
                     button{
                        width: 100px;
                        height: 34px;
                        border-radius: 8px;
                        /* background-color: black; */
                        margin-left: 50px;
                     }
       }
        
       @media (max-width:412px) {
                width: 100%;
                gap: 10px;
                img {
            width: 100px;
            height: 110px;
            border-radius: 10px;
            object-fit: fill;
         }
         h3 { 
                 width: 110px;
                 height: 24px;
                 font-family: 'Cabin';
                 font-style: normal;
                 font-weight: 600;
                 font-size: 15px;
                 line-height: 24px;
                 color: #1A1F16;
              }
              .imgbox {
               /* width: 100%; */
               height: 232px;
                   }

                   .save_btn {
               display: flex;
               gap: 20px;
                     button{
                        width: 34px;
                        height: 34px;
                        border-radius: 8px;
                        background-color: black;
                     }
       }

     } 
     
     :hover {
       /* top: 2px; */
       position: relative;
       top: -5px;
       transition: 0.1s;
     }
`;