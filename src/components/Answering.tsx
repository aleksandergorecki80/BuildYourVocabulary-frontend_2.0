import { useTypedSelector } from '../hooks/useTypedSelector';
import { Box } from '@mui/material';

import AnswerForm from './AnswerForm';
import Container from '@mui/material/Container';

const Answering: React.FC = () => {
  const {
    definitions: { data, loading },
  } = useTypedSelector((state) => {
    return {
      definitions: state.definitions,
    };
  });

  return (
    <Container>
      {data.length > 0 && !loading ? (
        <Box>
          <AnswerForm />
        </Box>
      ) : (
        ''
      )}
    </Container>
  );
};

export default Answering;
