import React, { useState, useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useAppActions } from '../hooks/useActions';

import Message from './Message';

import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box } from '@mui/material';

const AnswerForm: React.FC = () => {
  const [term, setTerm] = useState('');

  const { answeringSuccess, answeringFalse  } = useAppActions();

  const {
    app: { word, answerCorrect, showAnswer, showMessage },
  } = useTypedSelector((state) => {
    return {
      app: state.app,
    };
  });

  const onCheckTheAnswer = () => {
    return term === word ? answeringSuccess() : answeringFalse();
  };

  return (
    <Box>
      <FormGroup>
        <TextField
          fullWidth
          id="filled-basic"
          label="Answer"
          variant="filled"
          value={term}
          onChange={(event) => setTerm(event.target.value)}
          />
          { showMessage ? <Message answerCorrect={answerCorrect} /> : '' }

        <Button
          variant="contained"
          color="success"
          endIcon={<KeyboardArrowRightIcon />}
          onClick={onCheckTheAnswer}
          disabled = { showMessage }
        >
          Submit answer
        </Button>
      </FormGroup>
    </Box>
  );
};

export default AnswerForm;
