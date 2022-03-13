import * as React from 'react';
import { Box, ThemeProvider } from '@mui/system';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { Container } from '@mui/material';

import { theme } from '../utils/theme';

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
    <ThemeProvider theme={theme}>
      {props.answerCorrect ? answerIsCorrect : answerIsWrong}
    </ThemeProvider>
  );
};

export default Message;
