import React, { useState } from 'react';
import './Second.css'
import left from './images/icon-angle-left.svg'
import right from './images/icon-angle-right.svg'
import deskOne from './images/desktop-image-hero-1.jpg'
import deskTwo from './images/desktop-image-hero-2.jpg'
import deskThree from './images/desktop-image-hero-3.jpg'
import arrow from './images/icon-arrow.svg'
// Import data, left, and right images here

const data = [
  {
    id: 1,
    title: "Discover innovative ways to decorate",
    desc: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    mobile: "./images/mobile-image-hero-1.jpg",
    desktop: deskOne,
  },
  {
    id: 2,
    title: "We are available all across the globe",
    desc: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    mobile: "./images/mobile-image-hero-2.jpg",
    desktop: deskTwo
  },
  {
    id: 3,
    title: "Manufactured with the best materials",
    desc: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    mobile: "./images/mobile-image-hero-3.jpg",
    desktop: deskThree
  },
]

export default function Section() {
   const [items] = useState(data)
   const [slideIndex , setSlideIndex] = useState(1)

 
   function next() {
    if (slideIndex !== items.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === items.length) {
      setSlideIndex(1)
    }
  }

  function pre() {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(items.length)
    }
  }


   console.log(items.desktop);
   
   return(
  
    <div className='section'>
       { items.map((item,index) => 
          <article
            key={item.id}
             className={ slideIndex === index + 1 ? 'show' : 'hide'} 
        >

          <img src={item.desktop} alt='mobile-img' className='slider-img'/>
         
          </article>
      )  
      
    }
          { items.map((item,index) => 
          <article
            key={item.id}
             className={ slideIndex === index + 1 ? 'show' : 'hide'}
        >
            <div className='text'>
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <button className='btn-shop'>SHOP NOW<img src={arrow} alt='arrow'></img></button>
             
             </div>
               <div className='arrows'>
                  <div onClick={pre}><img src={left} alt='left-arrow' ></img></div>
                  <div onClick={next}> <img src={right} alt='right-arrow' ></img></div>
                </div>
         
          </article>
      )  
      
    }
       

   </div>
    
        )
}
