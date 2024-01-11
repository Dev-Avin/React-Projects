import React from 'react';

import {images} from '../../constants'
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
 <div className='app__header app__wrapper section__padding' id='home'>
  <div className='app__wrapper_info'>
    <SubHeading title="Chase the New Flavor" />
    <h1 className='app__header-h1'>The key to fine dining</h1>
    <p className='p__opensans' style={{margin : "2rem 0"}}>Hello! 👋 I’m Angelos, a professional software engineer, based in Greece. I work on 30 seconds of code in my free time to create the best resource I’ve never had when I started out as a developer. </p>
    <button type="button" className='custom__button'>Explore Menu</button>
   </div>
  <div className='app__wrapper_img'>
  <img src={images.welcome} alt='Header Image'/>
  </div>
 </div>);

export default Header;
