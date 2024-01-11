import React from 'react'
import'./Header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
const Header = () => {
  return (
    <div className='gpt3__header section__pading' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
          Let's Build Something Amazing with GPT-3 OpenAI
        </h1>
        <p>
          Join us on a journey to explore the fascinating world of AI and enhance your skills with hands-on projects and expert guidance.
        </p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder=' Your Email Adddres'></input>
          <button>Get Started</button>
        </div>
       <div className='gpt3__header-content__people'>
         <img src={people} alt='people'/>
         <p>1,600 people requested access visit in last 24 hours</p>
       </div>
      </div>
     
      <div className='gpt3__header-image'>
        <img src={ai} alt='ai'/>
      </div>
    </div>
  )
}

export default Header