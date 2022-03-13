import * as React from 'react';
import { Box, ThemeProvider, createTheme } from '@mui/system';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { Container } from '@mui/material';

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      dark: '#009688',
      green: '#37b24d',
    },
    error: {
      red: '#f03e3e',
    },
  },
});

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
