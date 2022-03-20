import { useEffect, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Definition from './Definition';
import PaginationBar from './PaginationBar';

import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

const Definitions: React.FC = () => {
  const [page, setPage] = useState<number>(1);

  const { data, loading, error } = useTypedSelector(
    (state) => state.definitions
  );

  useEffect(() => {
    if (data.length === 0) {
      setPage(1);
    }
  }, [data]);

  console.log(page)
  console.log(data)

  return (
    <Grid container rowSpacing={1}>
      {loading ? (
        <Grid item xs={12}>
          <CircularProgress color="primary" sx={{ fontSize: 60 }} />
        </Grid>
      ) : (
        ''
      )}
      {error ? <h3>{error}</h3> : ''}


      {(data.length > 0) &&
        data.map((definition: any, index) => {
          return definition.text &&
            definition.partOfSpeech &&
            index === page-1 ? (
            <Definition definition={definition} key={index} index={index} total={data.length}/>
          ) : null;
        })
        }

      { (data.length > 0) && <PaginationBar count={data.length} setPage={setPage}/>}

    </Grid>
  );
};

export default Definitions;
