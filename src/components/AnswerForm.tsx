import React, { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useAppActions } from '../hooks/useActions';
import Message from './Message';
import ShowAnswer from './ShowAnswer';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box } from '@mui/material';

const AnswerForm: React.FC = () => {
  const [term, setTerm] = useState('');
  const [showIndex, setShowIndex] = useState(0);

  const { answeringSuccess, answeringFalse, showAnswer } = useAppActions();

  const {
    app: { word, answerCorrect, isAnswerShown, showMessage },
  } = useTypedSelector((state) => {
    return {
      app: state.app,
    };
  });

  const onShowLetter = () => {
    const result = word.slice(0, showIndex + 1);
    setShowIndex((prevState) => prevState + 1);
    result && setTerm(result);
  };

  const onShowAnswer = () => {
    showAnswer();
  };

  const onCheckTheAnswer = () => {
    term === word ? answeringSuccess() : answeringFalse();
  };

  return (
    <Box>
      {!isAnswerShown ? (
        <FormGroup>
          <TextField
            fullWidth
            id="filled-basic"
            label="Type your answer here"
            variant="filled"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
          {showMessage ? <Message answerCorrect={answerCorrect} /> : ''}

          <Button
            variant="contained"
            color="success"
            endIcon={<KeyboardArrowRightIcon />}
            onClick={onCheckTheAnswer}
            disabled={showMessage}
            fullWidth
          >
            Submit answer
          </Button>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
            }}
          >
            <Button
              onClick={onShowLetter}
              variant="contained"
              color="warning"
              fullWidth
            >
              Show a letter
            </Button>
            <Button
              onClick={onShowAnswer}
              variant="contained"
              color="error"
              fullWidth
            >
              Show an answer
            </Button>
          </Box>
        </FormGroup>
      ) : (
        ''
      )}
      {isAnswerShown ? <ShowAnswer /> : ''}
    </Box>
  );
};

export default AnswerForm;
