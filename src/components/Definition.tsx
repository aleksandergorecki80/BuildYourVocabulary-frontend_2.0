import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

interface ChildProps {
  definition: {
    partOfSpeech: string;
    text: string;
  };
}

const Definition: React.FC<ChildProps> = (props) => {
  
  const strippedHtmlText = props.definition.text.replace(/<[^>]+>/g, '');
  
    return (
        <Grid item xs={12}>
          <Card variant="outlined">
            <CardContent>
              <Typography color="text.secondary">
                {props.definition.partOfSpeech}
              </Typography>
              <Typography variant="body2">{strippedHtmlText}</Typography>
            </CardContent>
          </Card>
        </Grid>
    );
};

export default Definition;
