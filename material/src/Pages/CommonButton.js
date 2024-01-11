
// import { Button } from '@mui/material'
// import React from 'react'

// function CommonButon(Children , color , disbled , size , variant , sx ) {
//   return (
//     <Button 
//     color  = {color}
//     disbled = {disbled}
//     size = {size}
//     variant={variant}
//     sx = {sx}
//     >
//         {Children}
//      </Button>

//   )
// }

// export default CommonButon

import React from 'react';
import { Button } from '@mui/material';

const CommonButton = ({ children, color, disabled, size, variant, sx }) => {
  return (
    <Button 
      color={color}
      disabled={disabled}
      size={size}
      variant={variant}
      sx={sx}
    >
      {children}
    </Button>
  );
};

export default CommonButton;
