import { grey } from '@mui/material/colors';
import {  createTheme } from '@mui/material/styles';

export const dashboardTheme = createTheme({
    components: {
        MuiButton : {
            styleOverrides: {
             contained :{
              //  backgroundColor: 'black',
               color: grey[500],
              }
                
            },
          },
      }
    ,
    palette :{
      primary : {
        main :"#203040"
        
      }
    }
});