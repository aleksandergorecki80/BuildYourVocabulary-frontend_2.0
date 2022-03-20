import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { ReactComponent as Logo } from './BYV_logo.svg';

const Header: React.FC = () => {
  return (

    <Box>
      <Logo />
      <Typography variant="h2"
        sx={{
          color: 'text.primary',
          fontSize: 26, 
          fontWeight: 'bold'
        }}
      > 
        Build Your Vocabulary
      </Typography>
    </Box>

  );
};

export default Header;
