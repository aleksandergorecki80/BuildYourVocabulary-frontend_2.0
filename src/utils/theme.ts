import { createTheme } from '@mui/material/styles';
import type {} from '@mui/lab/themeAugmentation';

interface PalettePrimary {
  light?: string;
  main: string;
  dark?: string;
  text?: string;
  contrastText?: string;
  answerText?: string;
}

const palettePrimary: PalettePrimary = {
  main: '#099268',
}

const theme = createTheme({
  palette: {
    primary: {...palettePrimary},
    secondary: {
      main: '#c92a2a',
    },
    text: {
      primary: '#343a40',
    }
  },
  components: {
    // Name of the component
    MuiButton: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple!
        disableElevation: true,
      },
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: 0,
          textTransform: 'none',
        },
      },
    },
    // Name of the component
    MuiInputLabel: {
      defaultProps: {
        // The props to change the default for.
        shrink: true, // The label stays small in the corner
        // color: 'secondary',
      },
    },
    MuiFilledInput: {
      defaultProps: {
        // The props to change the default for.
        sx: {
          paddingTop: 2,
          paddingBottom: 2
        }
      },
    },
  },
  typography: {
    body1: {
      fontWeight: 500,
      color: '#212529',
    },
  },

});






export default theme;