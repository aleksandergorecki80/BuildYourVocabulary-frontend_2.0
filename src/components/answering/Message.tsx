import * as React from 'react';
import { Box } from '@mui/system';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { Container } from '@mui/material';

interface CildProps {
    answerCorrect: boolean;
  }

const answerIsCorrect = (
  <Container>
    <CheckCircleOutlineRoundedIcon
      sx={{ color: 'success.green', fontSize: 48, fontWeight: 'medium' }}
    />
    <Box sx={{ color: 'success.green', fontSize: 34, fontWeight: 'medium' }}>
      CORRECT ANSWER
    </Box>
  </Container>
);

const answerIsWrong = (
  <Container
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <HighlightOffRoundedIcon
      sx={{ color: 'error.red', fontSize: 32, fontWeight: 'medium' }}
    />
    <Box sx={{ color: 'error.red', fontSize: 18, fontWeight: 'medium' }}>
      Wrong answer, try again
    </Box>
  </Container>
);



export const Message: React.FC<CildProps> = (props) => {
  return (
    <>
      {props.answerCorrect ? answerIsCorrect : answerIsWrong}
    </>
  );
};

export default Message;
