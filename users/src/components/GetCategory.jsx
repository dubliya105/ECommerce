import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Category.css";
import axios from 'axios'
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const GetCategory = () => {
    const [category,setCategory]=useState([]);

useEffect(() => {
    
    getCategory();
}, []);

    async function getCategory() {
        let result = await axios.get("http://localhost:8080/api/category/get");
        if (result.status === 200) {
          // result = await result.json();
          setCategory(result.data.data);
          // console.log(result.data.data);
        }
    }

  return (
    <div className="parent shadow-lg">
    
    <h4 className="text-left p-2 "><u>Gift ideas inspired by your shopping history</u></h4>
    <hr />
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {
          category.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={`http://localhost:8080/`+imageUrl.image} alt="product" />
            </div>
          );    
        })
        }
      </Carousel>
    </div>
  );
};
export default GetCategory;
