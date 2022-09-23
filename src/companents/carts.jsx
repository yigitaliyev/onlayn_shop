import styled from "styled-components";
import { products } from "../data/prodectArray";



 function Carts({CartsData , changecount}) {
     
    
    function showItem() {
        const result =[];
       
       for( let cartItem of CartsData.products ) {
        const index = products.findIndex(product => product.id === cartItem.id )
        result.push({...products[index], count: cartItem.count} )
       }
       return result
    }

    return (
    <Wrapper>
             <h2>Card</h2>
             <div className="box">
             {showItem().map((product) => {
                return(
                <div className="container">
                    <img src={product.image} alt="" />
                     
                  <div className="text">
                        <h5>{product.Name}</h5>
                        <p>Price:{product.price} </p>
                        <p>totol: {product.price * product.count}</p>
                  </div>

                   <div className="btn">
                     <button  className="plus" onClick={() => changecount("+" ,product.id)}>+</button>
                         <p>{product.count}</p> 
                      <button className="minus" onClick={() => changecount("-" ,product.id)}>-</button>
                  </div>
                 </div>

                )
               })}
             </div>
    </Wrapper>
    )
}
export default Carts;

const Wrapper = styled.div`
             margin: 80px 150px 0 0;
             
                h2 {
                    margin-left: 140px;
                    padding-bottom: 20px;
                  }
 

.container{
            display: flex;
            width: 450px;   
            height: 80px;
            background: #FFFFFF;
            margin-bottom: 20px;
            
            img {
                width: 64px;
                height: 80px ;
            }

            .text {
                /* margin: 10px 0 0 20px; */
                justify-content: center;
                display: inline;
            }
            .btn {
                margin-left: 282px;
                /* display: flex; */
                justify-content: center;
                p {
                    width: 24px;
                    height: 21px; 
                    left: 250px;
                    top: 30px;  

                    font-family: 'Cabin';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 24px;
                    text-align: center;
                    margin-bottom: 6px;
                    justify-content: center;
                    
                }
                .plus {
                    /* margin-bottom: 5px; */
                    width: 24px;
                    height: 24px;
                    margin-bottom: 5px;
                    background: #1A1F16;
                    color: wheat;
                }
                .minus {
                    width: 24px;
                    height: 24px;
                    color: wheat;
                     
                    background: #1A1F16;
                }
 
                 


            }
          }

`;