import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Box } from '@mui/material';
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

        <Box>
          <Box
            sx={{ color: 'primary.text', fontSize: 16, fontWeight: 'medium' }}
          >
            The answer is:
          </Box>
          <Box
            sx={{ color: 'primary.answerText', fontSize: 34, fontWeight: 'medium' }}
          >
            {word}
          </Box>
        </Box>

      <Button 
      onClick={onResetGame}
      variant="contained" color="primary">
        Try Again
      </Button>
    </Box>
  );
};

export default ShowAnswer;
