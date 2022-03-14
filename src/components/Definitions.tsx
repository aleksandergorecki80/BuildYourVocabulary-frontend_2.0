import { useEffect, useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Definition from './Definition';

import Container from '@mui/material/Container';
import HourglassBottomOutlinedIcon from '@mui/icons-material/HourglassBottomOutlined';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Button } from '@mui/material';

const Definitions: React.FC = () => {
  const [quantity, setQuantity] = useState(0);
  
  const { data, loading, error } = useTypedSelector(
    (state) => state.definitions
  );

  useEffect(() => {
    if(data.length === 0) {
      setQuantity(0);
    }
  }, [ data ])

  const onClickHandler = () => {
    setQuantity((prevState) => prevState + 1);
  }


  return (
    <Container>
      {loading ? (
        <HourglassBottomOutlinedIcon color="primary" sx={{ fontSize: 60 }} />
      ) : (
        ''
      )}
      {error ? <h3>{error}</h3> : ''}

      {data &&
        data.map((definition: any, index) => {
          return definition.text &&
            definition.partOfSpeech &&
            index <= quantity ? (
            <Definition
              definition={definition}
              key={index}
            />
          ) : null;
        })}

      { (data.length > 0 && data.length > quantity) ? <>      
        <Button 
        onClick={onClickHandler} 
        size="small"
        startIcon={<KeyboardDoubleArrowDownIcon  /> }
        endIcon={<KeyboardDoubleArrowDownIcon  /> }
        >Load next definition</Button>
        </>: ''}
    </Container>
  );
};

export default Definitions;
