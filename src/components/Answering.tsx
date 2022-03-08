import AnswerForm from './AnswerForm';
import ShowLetter from './ShowLetter';
import ShowAnswer from './ShowAnswer';
import Answer from './Answer';

const Answering: React.FC = () => {
  return (
    <div>
      <AnswerForm />
      <ShowLetter />
      <ShowAnswer />
      <Answer />
    </div>
  );
};

export default Answering;
