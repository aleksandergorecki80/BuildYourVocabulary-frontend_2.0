import { Box } from '@mui/material';

import { ReactComponent as Logo } from '../utils/BYV_logo.svg';

const Header: React.FC = () => {
  return (

    <Box>
      <Logo />
      <Box 
      sx={{
        color: '#495057',
        fontSize: 26, 
        fontWeight: 'bold'
      }}

      >
        Build Your Vocabulary
      </Box>
    </Box>

  );
};

export default Header;
