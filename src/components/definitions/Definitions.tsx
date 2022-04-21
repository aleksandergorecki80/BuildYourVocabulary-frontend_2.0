import { useTypedSelector } from '../../hooks/useTypedSelector';
import Definition from './Definition';

import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import { List } from '@mui/material';

const Definitions: React.FC = () => {
  const { data, loading } = useTypedSelector((state) => state.definitions);

  const loadingDiv = (
    <Grid item xs={12}>
      <CircularProgress color="primary" sx={{ fontSize: 60 }} />
    </Grid>
  );

  const definitionsGrid = (
    <>
      <List
        sx={{
          width: '100%',
          bgcolor: 'background.paper',
          position: 'relative',
          overflow: 'auto',
          maxHeight: '100%',
          '& ul': { padding: 0 },
          marginBottom: '250px',
        }}
      >
        {data.length > 0 &&
          data.map((definition: any, index) => {
            return definition.text && definition.partOfSpeech ? (
              <Definition
                definition={definition}
                key={index}
                index={index}
                total={data.length}
              />
            ) : null;
          })}
      </List>
    </>
  );

  if (data.length > 0 && !loading) {
    return definitionsGrid;
  }
  if (data.length === 0 && loading) {
    return loadingDiv;
  }
  return null;
};

export default Definitions;
