import React, { useState } from 'react';

const AnswerForm: React.FC = () => {

    const [ term, setTerm ] = useState('');


    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={term} onChange={(event) => setTerm(event.target.value)}/>
        <button>Submit answer</button>
      </form>
    </div>
  );
};

export default AnswerForm;
