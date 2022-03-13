import { createTheme } from '@mui/system';
export const theme = createTheme({
    palette: {
      background: {
        paper: '#fff',
      },
      text: {
        primary: '#212529',
        secondary: '#343a40',
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