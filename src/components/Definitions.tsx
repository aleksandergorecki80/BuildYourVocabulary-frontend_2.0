import { useTypedSelector } from '../hooks/useTypedSelector';
import Definition from './Definition';

const Definitions: React.FC = () => {

  const { data, loading, error } = useTypedSelector((state) => state.definitions);

  return (
    <div>
    { loading ? <h3>Loading ...</h3> : '' }      
    { error ? <h3>{error}</h3> : '' }      
   
    {data && data.map((definition: any, key) => {
      return definition.text && definition.partOfSpeech 
        ? <Definition definition = {definition} key={key}/>
        : null
    })}
    </div>
  );
};

export default Definitions;
