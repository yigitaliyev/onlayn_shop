import styled from "styled-components";
import { useState } from "react";
import { useSelector } from "react-redux";
import Shop from "../container/shop";

function Kategoriyalar() {
  const [datas, setdatas] = useState(false)

  const count = useSelector(function (store) {
    return store.todos.todo;
  })
  function bosildi(id) {

    if (id == 1) {
      setdatas(true)
      console.log(id)
    }

  }

  return (

    <Wrapper>

      <div>
        {count.map(item => {
          return (
            <a href="servisanjomlari" key={item.id} onClick={() => bosildi(item.id)}>
              <div>
                <img src={item.img} alt="" srcset="" />
                <h3 >{item.title}</h3>
              </div>
            </a>
          )
        })}
      </div>
      {datas ?
        (<div><Shop /></div>):("")
      }
    </Wrapper>
  )
}
      // { <Shop /> }

export default Kategoriyalar;

const Wrapper = styled.div`
     width : 100%;
     height: 130px;
     background-color: #6a6060;
     position: absolute;
     z-index: 1;

     a {
          text-decoration: none;
          width: 100%;
          color: black;
          div{
             margin: 25px 10px;
             border: 1px solid black ;
             border-radius: 10px;
             max-width: 200px;
             position: absolute;
            img {
                width: 100px;
                height: 80px;
                overflow: hidden;
                margin: 0 20px 0 0;
                /* 357 900  */
               }
               h3 {
                     font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                     margin: auto;

              }
     
          }
          

         
     }
  

`;