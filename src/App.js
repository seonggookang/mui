import { CustomButton } from './CustomButton.style';
import styles from './App.module.css';
import { Button } from '@mui/material';

function App() {
  return (
    <div>
      <Button>Contained</Button>
      {/* <CustomButton
        variant="contained"
        size="large"
        color="secondary"
        disableRipple={true}
        border="blue" // css와 js가 소통을 할 수 있음
      >
        Contained
      </CustomButton> */}
      {/* <Button
        variant="contained"
        size="large"
        color="secondary"
        disableRipple={true}
        sx={
          {
            fontSize: '2rem',
            backgroundColor: 'red',
            mt: '10px',
            '&:hover': { backgroundColor: 'orange' },
            '@media (max-width:600px)': { backgroundColor: 'grey' },
          }
        }
      >
        Contained
      </Button> */}
    </div>
  );
}

export default App;
