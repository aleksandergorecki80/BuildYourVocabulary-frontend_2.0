import { useState, useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDefinitionsActions } from '../hooks/useDefinitionsActions';

const LoadDefinitions: React.FC = () => {
  const [showButton, setShowButton] = useState(true);
  const { fetchDefinitions } = useDefinitionsActions();

  const { data } = useTypedSelector((state) => state.definitions);

  useEffect(() => {
    data.length > 0 ? setShowButton(false) : setShowButton(true);
  }, [ data ])

   
  const onLoadDefinitions = () => {
    fetchDefinitions();
  };

  return (
    <div>
      <p>
        Press the button to load random definition and try to guess the word it
        describes.
      </p>
      {showButton ? <button onClick={onLoadDefinitions}>Load</button> : null}
    </div>
  );
};

export default LoadDefinitions;
