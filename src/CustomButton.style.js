import styled from '@emotion/styled';
import { Button } from '@mui/material';

// css in javascript
// styled componet
// semi colon error 해결 >> 객체를 괄호로 한 번 감쌈
export const CustomButton = styled(Button)(({ border }) => ({
  fontSize: '2rem',
  marginTop: '20px',
  backgroundColor: 'red', // 객체에 넣어서 보내주고 있다.
  // 오브젝트는 짝대기를 이해할 수 없기 때문에 camel case로.
  border: `4px solid ${border}`,
  '&:hover': { backgroundColor: 'orange' },
  '@media (max-width:600px)': { backgroundColor: 'grey' },
}));
