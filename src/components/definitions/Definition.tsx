import Link from '@mui/material/Link';

interface ChildProps {
  definition: {
    partOfSpeech: string;
    text: string;
    attributionText: string;
    attributionUrl: string;
  };
  index: number;
  total: number;
}

const Definition: React.FC<ChildProps> = (props) => {
  const strippedHtmlText = props.definition.text.replace(/<[^>]+>/g, '');



  return (
      <div>
          {`Definition: ${props.index + 1} / ${props.total}`}
          {props.definition.partOfSpeech}
          {strippedHtmlText.charAt(0).toUpperCase() +
            strippedHtmlText.slice(1)}
                <Link
                  href={props.definition.attributionUrl}
                  underline="hover"
                  target="_blank"
                >
                  {props.definition.attributionText.slice(
                    4,
                    props.definition.attributionText.length
                  )}
                </Link>
      </div>

  );
};

export default Definition;
