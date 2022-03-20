import { useState, useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDefinitionsActions } from '../hooks/useActions';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

// Radio
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const LoadDefinitions: React.FC = () => {
  const [showButton, setShowButton] = useState(true);
  const [level, setLevel] = useState('medium');

  const { fetchDefinitions } = useDefinitionsActions();

  const { data, loading } = useTypedSelector((state) => state.definitions);

  useEffect(() => {
    data.length > 0 || loading ? setShowButton(false) : setShowButton(true);
  }, [data, loading]);

  const onLoadDefinitions = () => {
    fetchDefinitions(level);
  };

  const messageForNotLoadedData = (
    <Typography variant="body1" gutterBottom>
      Load random definitions and try to guess the word they
      describe.
    </Typography>
  );

  const messageForLoadedData = (
    <Typography variant="body1" gutterBottom>
      Reade the definitions and try to gess the meaning. Type your answet below.
    </Typography>
  );

  const loadingDiv = (
    <Grid container>
      <Grid item xs={12}>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={level}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLevel(e.target.value)
            }
          >
            <FormControlLabel value="easy" control={<Radio />} label="Easy" />
            <FormControlLabel
              value="medium"
              control={<Radio />}
              label="Medium"
            />
            <FormControlLabel value="hard" control={<Radio />} label="Hard" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          size="large"
          onClick={onLoadDefinitions}
          sx={{
            fontSize: 18,
            textTransform: 'uppercase',
            padding: '24px 48px',
          }}
        >
          Load definitions
        </Button>
      </Grid>
    </Grid>
  );

  return (
    <Grid container>
      <Grid item xs={12}>
        {data.length === 0 ? messageForNotLoadedData : messageForLoadedData}
      </Grid>
      <Grid item xs={12}>
        {showButton ? loadingDiv : null}
      </Grid>
    </Grid>
  );
};

export default LoadDefinitions;
