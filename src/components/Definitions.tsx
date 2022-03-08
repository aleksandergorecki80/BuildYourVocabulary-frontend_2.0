import Definition from './Definition';

const partOfSpeach = 'This will be generated';

const Definitions: React.FC = () => {
  return (
    <div>
      {<p>Part of speach: {partOfSpeach}</p>}
      <ul>
        <Definition />
        <Definition />
        <Definition />
        <div>show more</div>
      </ul>
    </div>
  );
};

export default Definitions;
