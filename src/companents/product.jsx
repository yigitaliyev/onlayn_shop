import styled from "styled-components";
import { ReactComponent as AddBtn} from "../rasmlar/Vector (2).svg"
import {  useDispatch, useSelector } from "react-redux"
import { addCart } from "../store/qatlam2";


   function Product({image, Name, info, price, id }) {
   const dispach = useDispatch()
   // const cart   = useSelector(store => store.cart)
      //   console.log(cart)
    return (
        <Wrapper>
          <div className="imgbox">
            <img src={image} alt=""/>
          </div>     
          <h3>{Name}</h3>
          <p>{info}</p> 
            
               <div className="save_btn">
                   <h3>{price}</h3>
                      <button onClick={() => dispach(addCart({image, Name, info, price,id})) }>
                         <AddBtn />
                      </button>  

               </div>

        </Wrapper>
    )
}

export default Product;

const Wrapper = styled.div`
     width: 100%;
     /* height: 100vh; */
          gap: 20px;
         img {
            width: 200px;
            height: 210px;
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

            width: 191.36px;
            height: 232px;
            
         }

       .save_btn {
               display: flex;
               gap: 50px;
                     button{
                        width: 34px;
                        height: 34px;
                        border-radius: 8px;
                        background-color: black;
                     }
       }
        

`;