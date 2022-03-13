import { useState, useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDefinitionsActions } from '../hooks/useActions';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

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

  const loadingDiv = (
    <Container>
      <Typography variant="h3" component="h3" gutterBottom>
        Build Your Vocabulary
      </Typography>
      <Typography variant="body1" gutterBottom>
        Press the button to load random definition and try to guess the word it
        describes.
      </Typography>
      <Button
        variant="outlined"
        size="large"
        onClick={onLoadDefinitions}
        fullWidth
        sx={{ 
          fontSize: 26 
        }}
      >
        Load definitions
      </Button>
    </Container>
  );

  return <div>{showButton ? loadingDiv : null}</div>;
};

export default LoadDefinitions;
