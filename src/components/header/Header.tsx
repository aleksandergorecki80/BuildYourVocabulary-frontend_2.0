import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { ReactComponent as Logo } from './BYV_logo.svg';
import { ReactComponent as LogoSmall } from './BYV_logo_small.svg';
import Grid from '@mui/material/Grid';

const style = {
  color: 'text.primary',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'left',
};

const Header: React.FC = () => {


  const { data, loading, error } = useTypedSelector((state) => state.definitions);

  // useEffect(() => {
  //   if (data.length === 0) {
  //     setPage(1);
  //   }
  // }, [data, loading, error]);

  const main = (
    <Box>
      <Logo />
      <Typography
        variant="h2"
        sx={{
          color: 'text.primary',
          fontSize: 26,
          fontWeight: 'bold',
        }}
      >
        Build Your Vocabulary
      </Typography>
    </Box>
  );

  const small = (
    <Grid
      container
      spacing={2}
      sx={{
        justifyContent: 'center',
        alignItems: 'senter',
      }}
    >
      <Grid item>
        <LogoSmall />
      </Grid>
      <Grid item>
        <Typography variant="h2" sx={style}>
          Build
        </Typography>
        <Typography variant="h2" sx={style}>
          Your
        </Typography>
        <Typography variant="h2" sx={style}>
          Vocabulary
        </Typography>
      </Grid>
    </Grid>
  );

  return <>
  { (data.length > 0 && !loading && !error) ? small : main }
  </>;
};

export default Header;
