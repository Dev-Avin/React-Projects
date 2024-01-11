import React from 'react'
import  CommonButton  from "./CommonButton"; 
import NotificationBell from '../NotificationBell';
import './Auth.css';
const Auth = () => {
 
    const buttonStyles = {
      fontSize: '20px',
      fontWeight: '700',
      '&:hover': {
        backgroundColor: 'transparent',
        color: 'red',
      },
    };
  
    return (
      <div className="auth-container">
        <h2>Login</h2>
        <form>
          {/* Your authentication form fields go here */}
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <CommonButton size="large" variant="contained" sx={buttonStyles}>
            Login
          </CommonButton>
        </form>
      </div>
    );
}

export default Auth