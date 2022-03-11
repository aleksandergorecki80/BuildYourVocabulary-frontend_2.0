import AnswerForm from './AnswerForm';
import ShowLetterAnswer from './ShowLetterAnswer';
import Container from '@mui/material/Container';

const Answering: React.FC = () => {
  return (
    <Container>
      <AnswerForm />
      <ShowLetterAnswer />
    </Container>
  );
};

export default Answering;
