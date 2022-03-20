import { useTypedSelector } from '../../hooks/useTypedSelector';
import AnswerForm from './AnswerForm';

const Answering: React.FC = () => {
  const {
    definitions: { data, loading },
  } = useTypedSelector((state) => {
    return {
      definitions: state.definitions,
    };
  });

  return (
    <>
      {data.length > 0 && !loading ? (
          <AnswerForm />
      ) : (
        ''
      )}
    </>
  );
};

export default Answering;
