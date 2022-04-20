// import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import React, { useEffect, useState, useRef } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useAppActions } from '../../hooks/useActions';
import Message from './Message';
import validation from '../../utils/validation';
import ShowAnswer from './ShowAnswer';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Grid from '@mui/material/Grid';
import ButtonGroup from '@mui/material/ButtonGroup';

const AnswerForm: React.FC = () => {
  const [term, setTerm] = useState('');
  const [inputError, setInputError] = useState(false);
  const [showIndex, setShowIndex] = useState(0);

  const { answeringSuccess, answeringFalse, showAnswer } = useAppActions();

  const {
    app: { word, answerCorrect, isAnswerShown, showMessage },
  } = useTypedSelector((state) => {
    return {
      app: state.app,
    };
  });

  const firstUpdate = useRef(true);
  // const inputRefDiv = useRef<HTMLDivElement>(null);

  // useLayoutEffect(() => {
  //   if(null !== inputRefDiv.current){
  //     inputRefDiv.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // });

  useEffect(()=> {
    if(firstUpdate.current){
      firstUpdate.current = false;
      return;
    }
    const validationResult = validation(term);
    !validationResult ? setInputError(true) : setInputError(false);
  }, [term])

  const onShowLetter = () => {
    const result = word.slice(0, showIndex + 1);
    setShowIndex((prevState) => prevState + 1);
    result && setTerm(result);
  };

  const onShowAnswer = () => {
    showAnswer();
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value.trim())
  }

  const onCheckTheAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const validationResult = validation(term);   
    !validationResult ? setInputError(true) : setInputError(false);
    if(validationResult){
      term.toLowerCase() === word.toLowerCase() ? answeringSuccess() : answeringFalse();
    }
  };

  return (
    <>
      {!isAnswerShown ? (
        <Box component="form" onSubmit={onCheckTheAnswer}>
          <FormGroup>
            <Grid container rowSpacing={2}>
              <Grid item xs={12}>
                {/* <div ref={inputRefDiv}> */}
                <TextField
                  error={inputError}
                  fullWidth
                  label={!inputError ? "Type your answer here" : "Error"}
                  variant="filled"
                  helperText={inputError ? "Incorrect entry." : ''}
                  value={term}
                  onChange={onChangeHandler}
                  />                 
                  {/* </div> */}
                  </Grid>
                {showMessage ? <Grid item xs={12}><Message answerCorrect={answerCorrect} /></Grid> : ''}

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  endIcon={<KeyboardArrowRightIcon />}
                  
                  disabled={showMessage}
                  fullWidth
                  sx={{
                    paddingTop: 3,
                    paddingBottom: 3,
                  }}
                >
                  Submit answer
                </Button>
              </Grid>
              <Grid item xs={12}>
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined primary button group"
                  fullWidth
                >
                  <Button
                    onClick={onShowLetter}
                    variant="contained"
                    color="warning"
                    fullWidth
                    sx={{
                      paddingTop: 3,
                      paddingBottom: 3,
                    }}
                  >
                    Show a letter
                  </Button>
                  <Button
                    onClick={onShowAnswer}
                    variant="contained"
                    color="error"
                    fullWidth
                    sx={{
                      paddingTop: 3,
                      paddingBottom: 3,
                    }}
                  >
                    Show an answer
                  </Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </FormGroup>
        </Box>
      ) : (
        ''
      )}
      {isAnswerShown ? <ShowAnswer /> : ''}
    </>
  );
};

export default AnswerForm;
