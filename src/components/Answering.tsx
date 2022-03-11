import AnswerForm from './AnswerForm';
import ShowLetter from './ShowLetter';
import ShowAnswer from './ShowAnswer';
import Answer from './Answer';

import Container from '@mui/material/Container';

const Answering: React.FC = () => {
  return (
    <Container>
      <AnswerForm />
      <ShowLetter />
      <ShowAnswer />
      <Answer />
    </Container>
  );
};

export default Answering;
