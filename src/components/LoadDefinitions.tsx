import { useState, useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDefinitionsActions } from '../hooks/useActions';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

const LoadDefinitions: React.FC = () => {
  const [showButton, setShowButton] = useState(true);
  const { fetchDefinitions } = useDefinitionsActions();

  const { data, loading } = useTypedSelector((state) => state.definitions);

  useEffect(() => {
    data.length > 0 || loading ? setShowButton(false) : setShowButton(true);
  }, [data, loading]);

  const onLoadDefinitions = () => {
    fetchDefinitions();
  };

  const messageForNotLoadedData = (
    <Typography variant="body1" gutterBottom>
      Press the button to load random definitions and try to guess the word they
      describe.
    </Typography>
  );

  const messageForLoadedData = (
    <Typography variant="body1" gutterBottom>
      Reade the definitions and try to gess the meaning.
      Type your answet below.
    </Typography>
  );

  const loadingDiv = (
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
  );

  return <Box>
    { data.length === 0 ? messageForNotLoadedData : messageForLoadedData}
    {showButton ? loadingDiv : null}
    </Box>;
};

export default LoadDefinitions;
