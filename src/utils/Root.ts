import { styled } from '@mui/material/styles';
// import { red, green, blue, purple } from '@mui/material/colors';

export const Root = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      // backgroundColor: red[500],
    },
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      // backgroundColor: purple[500],
    },
    [theme.breakpoints.up('md')]: {
      width: '75%',
      // backgroundColor: blue[500],
    },
    [theme.breakpoints.up('lg')]: {
      // backgroundColor: green[500],
      width: '50%',
    },
  }));