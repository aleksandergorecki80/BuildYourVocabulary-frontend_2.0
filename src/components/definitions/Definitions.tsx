// import { useEffect, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Definition from './Definition';
// import PaginationBar from './PaginationBar';

import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

const Definitions: React.FC = () => {
  const { data, loading } = useTypedSelector((state) => state.definitions);

  const loadingDiv = (
    <Grid item xs={12}>
      <CircularProgress color="primary" sx={{ fontSize: 60 }} />
    </Grid>
  );

  const definitionsGrid = (
    <>
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
