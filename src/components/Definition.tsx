interface ChildProps {
  definition: {
    partOfSpeech?: string;
    text?: string;
  }
}

const Definition: React.FC<ChildProps> = (props) => {
  return (
    <li>
      <div>
        <h4>{props.definition.partOfSpeech}</h4>
        <p>{props.definition.text}</p>
      </div>
    </li>
  );
};

export default Definition;
