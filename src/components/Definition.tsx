import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface ChildProps {
  definition: {
    partOfSpeech: string;
    text: string;
  };
}

const Definition: React.FC<ChildProps> = (props) => {

  const parser = new DOMParser();
  const parsedText = parser.parseFromString(props.definition.text, "text/html");
  console.log(parsedText)

  return (
      <Box className='margin' sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {props.definition.partOfSpeech}
            </Typography>
            <Typography variant="body2">{parsedText}</Typography>
          </CardContent>
        </Card>
      </Box>
  );
};

export default Definition;
