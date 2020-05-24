import React from 'react';
import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return(
    <buttom 
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </buttom>
  )
}

export default CustomButton;