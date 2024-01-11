import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
 <div className='app__aboutus app__bg flex__center section__padding' id='about'>
   <div className='app__aboutus-overlay flex__center'>
    <img src={images.G} alt='G'/>
   </div>
   <div className='app__aboutus-content flex__center'>
   <div className='app__aboutus-content_aboutus'>
     <h1 className='headtext__cormorant'>About US</h1>
     <img src ={images.spoon} alt='about_spoon' className='spoon__img'/>
     <p className='p__opensans'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quae eveniet quo, eum quasi eligendi adipisci, maxime alias a esse ratione distinctio cupiditate excepturi vitae voluptate inventore quibusdam. Earum, vel. </p>
     <button className='custom__button'>Know More</button>
   </div>
   <div className='app__aboutus-content_knife flex__center'>
    <img src={images.knife} alt='aboutus_knife'/>
   </div>
   <div className='app__aboutus-content_history'>
     <h1 className='headtext__cormorant'>Our History</h1>
     <img src ={images.spoon} alt='about_spoon' className='spoon__img'/>
     <p className='p__opensans'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quae eveniet quo, eum quasi eligendi adipisci, maxime alias a esse ratione distinctio cupiditate excepturi vitae voluptate inventore quibusdam. Earum, vel. </p>
     <button className='custom__button'>Know More</button>
   </div>
   </div>
 </div>
);

export default AboutUs;
