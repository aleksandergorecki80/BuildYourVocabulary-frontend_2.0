import { useState, useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDefinitionsActions } from '../hooks/useActions';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

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
      Press the button to load random definitions and try to guess the word they
      describe.
    </Typography>
  );

  const messageForLoadedData = (
    <Typography variant="body1" gutterBottom>
      Reade the definitions and try to gess the meaning. Type your answet below.
    </Typography>
  );

  const loadingDiv = (
    <Box>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={level}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLevel(e.target.value)}
        >
          <FormControlLabel value="easy" control={<Radio />} label="Easy" />
          <FormControlLabel value="medium" control={<Radio />} label="Medium" />
          <FormControlLabel value="hard" control={<Radio />} label="Hard" />
        </RadioGroup>
      </FormControl>
      <Button
        variant="outlined"
        size="large"
        onClick={onLoadDefinitions}
        fullWidth
        sx={{
          fontSize: 26,
        }}
      >
        Load definitions
      </Button>
    </Box>
  );

  return (
    <Box>
      {data.length === 0 ? messageForNotLoadedData : messageForLoadedData}
      {showButton ? loadingDiv : null}
    </Box>
  );
};

export default LoadDefinitions;
