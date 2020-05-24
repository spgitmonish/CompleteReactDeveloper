import React from 'react';
import './custom-button.styles.scss'

const CustomButton = ({ children, ...otherProps }) => {
  return(
    <buttom className='custom-button' {...otherProps}>
      {children}
    </buttom>
  )
}

export default CustomButton;