import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { useState, useRef } from 'react';

interface ChildProps {
  definition: {
    partOfSpeech: string;
    text: string;
    attributionText: string;
    attributionUrl: string;
  };
  index: number;
  page: number;
  total: number;
  setPage: (page: number) => void;
}

const Definition: React.FC<ChildProps> = (props) => {
  const strippedHtmlText = props.definition.text.replace(/<[^>]+>/g, '');

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const sliderfDiv = useRef<HTMLDivElement>(null);

  function handleTouchStart(e: any) {
    setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e: any) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
    console.log('handleTouchEnd');
    if (touchStart - touchEnd > 150) {
      if (null !== sliderfDiv.current) {
        // do your stuff here for left swipe
        // moveSliderRight();
        props.setPage(props.page + 1);
        // sliderfDiv.current.setAttribute('style', 'white-space: pre; position: absolute; left: -9999px;');;
      }
    }

    if (touchStart - touchEnd < -150) {
      if (null !== sliderfDiv.current) {
        if (props.page - 1 > 0) {
          // do your stuff here for right swipe
          // moveSliderLeft();
          props.setPage(props.page - 1);
          // sliderfDiv.current.setAttribute('style', 'white-space: pre; position: absolute; left: -9999px;');;
        }
      }
    }
  }

  return (
    <div
      ref={sliderfDiv}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Card variant="outlined" sx={{ width: '100%' }}>
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
    </div>
  );
};

export default Definition;
