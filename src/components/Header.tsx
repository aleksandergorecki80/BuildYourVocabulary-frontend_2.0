import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { theme } from '../utils/theme';
import { ReactComponent as Logo } from '../utils/BYV_logo.svg';

const Header: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
    <Box>
      <Logo />
      <Box 
      sx={{
        color: 'text.secondary',
        fontSize: 26, 
        fontWeight: 'bold'
      }}

      >
        Build Your Vocabulary
      </Box>
    </Box>
    </ThemeProvider>
  );
};

export default Header;
