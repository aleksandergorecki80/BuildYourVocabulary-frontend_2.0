import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { theme } from '../utils/theme';
import { Box, ThemeProvider } from '@mui/material';
import Button from '@mui/material/Button';

import { useAppActions } from '../hooks/useActions';

const ShowAnswer: React.FC = () => {
  const { word } = useTypedSelector((state) => state.app);
  const { resetGame } = useAppActions()

  const onResetGame = () => {
    resetGame();
  }

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Box>
          <Box
            sx={{ color: 'text.primary', fontSize: 16, fontWeight: 'medium' }}
          >
            The answer is:
          </Box>
          <Box
            sx={{ color: 'success.green', fontSize: 34, fontWeight: 'medium' }}
          >
            {word}
          </Box>
        </Box>
      </ThemeProvider>
      <Button 
      onClick={onResetGame}
      variant="contained" color="primary">
        Try Again
      </Button>
    </Box>
  );
};

export default ShowAnswer;
