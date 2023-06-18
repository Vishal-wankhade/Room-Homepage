
import React from 'react'
import './Header.css'
import bar from './images/icon-hamburger.svg'
import close from './images/icon-close.svg'


export default function Headers() {
   
  function barClick(){
    const bar = document.querySelector(".bar")
    const close = document.querySelector(".close")
    const head = document.querySelector("header")
    const ul = document.querySelector("ul")
    const h2 = document.querySelector("h2")
    bar.style.display = "none";
    close.style.display = "block";
    ul.classList.add("flex")
    h2.style.display = "none";
    head.classList.add("bgwhite")
  }

  function closeClick(){
    const bar = document.querySelector(".bar")
    const close = document.querySelector(".close")
    const ul = document.querySelector("ul")
    const h2 = document.querySelector("h2")
    const head = document.querySelector("header")
    bar.style.display = "block";
    close.style.display = "none";
    ul.classList.remove("flex")
    h2.style.display = "block";
    head.classList.remove("bgwhite")
    
  }


    return (
      <header>
        <h2>Room</h2>
        <img src={bar} alt='bar' className='bar' onClick={barClick}/>
        <img src={close} alt='close' className='close' onClick={closeClick}/>
        <ul>
            
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Shop</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Contact</a></li>
        </ul>
      </header>
    )
  }

