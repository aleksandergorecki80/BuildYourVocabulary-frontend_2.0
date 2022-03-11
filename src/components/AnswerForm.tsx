import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const AnswerForm: React.FC = () => {
  const [term, setTerm] = useState('');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit} noValidate autoComplete="off">
        <FormGroup>
          <TextField
            fullWidth
            id="filled-basic"
            label="Answer"
            variant="filled"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
          <Button
            variant="contained"
            color="success"
            endIcon={<KeyboardArrowRightIcon />}
          >
            Submit answer
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default AnswerForm;
