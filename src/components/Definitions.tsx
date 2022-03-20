import { useEffect, useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Definition from './Definition';

import Grid from '@mui/material/Grid';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const Definitions: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(0);

  const { data, loading, error } = useTypedSelector(
    (state) => state.definitions
  );

  useEffect(() => {
    if (data.length === 0) {
      setQuantity(0);
    }
  }, [data]);

  const onClickHandlerPrevious = () => {
    setQuantity((prevState) => prevState - 1);
  };

  const onClickHandlerNext = () => {
    setQuantity((prevState) => prevState + 1);
  };

console.log(data.length, 'data.length')
console.log(quantity, 'quantity')

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


      {data.length > 0 && quantity > 0 ? (
        <>  
          <Grid item xs={12}>
            <Button
              onClick={onClickHandlerPrevious}
              size="small"
              startIcon={<KeyboardDoubleArrowUpIcon />}
              endIcon={<KeyboardDoubleArrowUpIcon />}
            >
              Previous definition
            </Button>
          </Grid>
        </>
      ) : (
        ''
      )}


      {data &&
        data.map((definition: any, index) => {
          return definition.text &&
            definition.partOfSpeech &&
            index === quantity ? (
            <Definition definition={definition} key={index} index={index} total={data.length}/>
          ) : null;
        })}



      {data.length > 0 && data.length-1 > quantity ? (
        <>  
          <Grid item xs={12}>
            <Button
              onClick={onClickHandlerNext}
              size="small"
              startIcon={<KeyboardDoubleArrowDownIcon />}
              endIcon={<KeyboardDoubleArrowDownIcon />}
            >
              Next definition
            </Button>
          </Grid>
        </>
      ) : (
        ''
      )}

    </Grid>
  );
};

export default Definitions;
