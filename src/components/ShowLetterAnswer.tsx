import { Box } from '@mui/material';
import Button from '@mui/material/Button';

const ShowLetterAnswer: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
      className="margin"
    >
      <Button variant="contained" color="warning" fullWidth>
        Show a letter
      </Button>
      <Button variant="contained" color="error" fullWidth>
        Show an answer
      </Button>
    </Box>
  );
};

export default ShowLetterAnswer;
