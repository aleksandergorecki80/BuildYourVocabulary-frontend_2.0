import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

interface ChildProps {
  definition: {
    partOfSpeech: string;
    text: string;
  };
  index: number;
  total: number;
}

const Definition: React.FC<ChildProps> = (props) => {
  const strippedHtmlText = props.definition.text.replace(/<[^>]+>/g, '');

  return (
    <Grid item xs={12}>
      <Card variant="outlined">
         <CardContent>
          <Typography color="text.secondary" align="left" sx={{fontSize: 'small'}}>
            {`Definition: ${props.index+1} / ${props.total}`}
          </Typography>
          <Typography color="text.secondary">
            {props.definition.partOfSpeech}
          </Typography>
          <Typography variant="body1">
            {strippedHtmlText.charAt(0).toUpperCase() +
              strippedHtmlText.slice(1)}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Definition;
