import { createTheme } from '@mui/material';
import { globalColors } from './globalColors';

// web site가 기본적으로 가져갔으면 하는 색깔을 정함
export let theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f44336',
      light: globalColors.green['50'],
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'large',
        // color: 'primary',
        color: 'secondary',
        disableRipple: true,
      },

      styleOverrides: {
        root: {
          fontSize: '2rem',
          marginTop: '20px',
          // backgroundColor: 'red',
          // '&:hover': { backgroundColor: 'orange' },
          // '@media (max-width:600px)': { backgroundColor: 'grey' },
        },
      },
    },
  },
});
