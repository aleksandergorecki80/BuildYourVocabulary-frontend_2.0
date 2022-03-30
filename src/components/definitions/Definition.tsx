import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
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
    <Card variant="outlined" sx={{ width: "100%"}}>
      <CardContent>
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <Typography
              color="text.secondary"
              align="left"
              sx={{ fontSize: 'small' }}
            >
              {`Definition: ${props.index + 1} / ${props.total}`}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography color="text.secondary">
              {props.definition.partOfSpeech}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              {strippedHtmlText.charAt(0).toUpperCase() +
                strippedHtmlText.slice(1)}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              color="text.secondary"
              align="left"
              sx={{ fontSize: 'small' }}
            >
              Source:
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
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Definition;
