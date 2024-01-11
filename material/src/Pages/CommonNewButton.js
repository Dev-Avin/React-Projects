import React from 'react'
import { Button } from '@mui/material'
const CommonNewButton =(Children , color , disbled , size , variant , sx ) => {
    return (
      <Button 
          color  = {color}
          disbled = {disbled}
          size = {size}
          variant={variant}
          sx = {sx}
          >
              {Children}
           </Button>
    )
  }
  

export default CommonNewButton