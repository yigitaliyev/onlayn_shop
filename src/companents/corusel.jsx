import { Carousel } from "react-carousel-minimal";
import styled from "styled-components";

function Corusel() {
  const data = [
    {
      image: "https://images.deal.by/290826635_w700_h500_nabor-instrumentov-826.jpg",
    },
    {
      image: "https://shopme.uz/upload/iblock/bd3/bd3c9c076435ab051e33cb60f3eed4ff.jpg",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSia_5k0rck2z6G5rtZJsXI63zG8y_TREAARNGVw0UYUX8CGO8uIpsib86cHApyVE1FkWQ&usqp=CAU",
    },
    {
      image: "https://redmaster.by/upload/iblock/03d/nabor_instrumentov_17pr1_2_6gr_10_27mm.jpg",
    },
    {
      image: "https://images.prom.ua/507031584_nabor-klyuchej-kombinirovannyh.jpg",
    },
    {
      image: "https://avatars.mds.yandex.net/get-mpic/5177817/img_id7017430910283451405.jpeg/orig",
    },
    {
      image: "https://content2.rozetka.com.ua/goods/images/original/217838968.jpg",
    },
    {
      image: "https://static.sello.uz/unsafe/x400/https://static.sello.uz/fm/20211227/4e4c7a83-8e04-430a-bf36-b1c2a134f00b.jpg",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSECOsE9eBL1JR5-CrYXqcJFPGdBJp3sMRT3Q&usqp=CAU",
    }
  ];

  
  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }


    return (
        <Wrapper>
         
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="589px"
            captionStyle={captionStyle}
            radius="0 40px 40px 0"
            // slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            // dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              // margin: "40px auto",
              width: "850px",
            
            }}
          />
       </Wrapper>

   )

}

export default Corusel;

const Wrapper = styled.div`
     
     @media (max-width:300px) {
                 width  :100px ;
                 height: 100px;
     } 
`;