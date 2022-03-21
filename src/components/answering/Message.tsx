import * as React from 'react';
import { Box } from '@mui/system';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { Container } from '@mui/material';

interface CildProps {
    answerCorrect: boolean;
  }

const answerIsCorrect = (
  <Container
  sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}
  >
    <CheckCircleOutlineRoundedIcon
      sx={{ color: 'primary.main', fontSize: 32, fontWeight: 'medium' }}
    />
    <Box sx={{ color: 'primary.main', fontSize: 18, fontWeight: 'medium' }}>
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
      sx={{ color: 'secondary.main', fontSize: 32, fontWeight: 'medium' }}
    />
    <Box sx={{ color: 'secondary.main', fontSize: 18, fontWeight: 'medium' }}>
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
