import { useState, useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Definition from './Definition';

import Container from '@mui/material/Container';
import HourglassBottomOutlinedIcon from '@mui/icons-material/HourglassBottomOutlined';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Typography from '@mui/material/Typography';

const Definitions: React.FC = () => {
  const [quantity, setQuantity] = useState(0);
  const [filteredResult, setFilteredResult] = useState<{}[]>([]);

  const { data, loading, error } = useTypedSelector(
    (state) => state.definitions
  );

  const onClickHandler = () => {
    setQuantity((prevState) => prevState + 1);
  }

  useEffect(() => {
    const result = data.filter((element: any) => {
      return element.text && element.partOfSpeech;
    });
    setFilteredResult(result);
  }, [data]);

  interface Definition {
    partOfSpeech: string;
    text: string;
  }


  console.log(quantity)
  console.log(filteredResult.length)

  return (
    <Container>
      {loading ? (
        <HourglassBottomOutlinedIcon color="primary" sx={{ fontSize: 60 }} />
      ) : (
        ''
      )}
      {error ? <h3>{error}</h3> : ''}

      {filteredResult &&
        filteredResult.map((definition: any, index) => {
          return definition.text &&
            definition.partOfSpeech &&
            index <= quantity ? (
            <Definition
              definition={definition}
              key={index}
            />
          ) : null;
        })}

      { (filteredResult.length > 0 && filteredResult.length > quantity) ? <>
          <Typography variant="overline" display="block" >
          Load next definition
        </Typography>
        <KeyboardDoubleArrowDownIcon onClick={onClickHandler} className="pointer" /> </>: ''}
    </Container>
  );
};

export default Definitions;
