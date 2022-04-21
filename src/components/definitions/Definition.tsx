import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

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
    <>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={`${props.index + 1}/${props.total} - ${
            props.definition.partOfSpeech
          } `}
          secondary={
            <React.Fragment>
              <Typography
                sx={{
                  display: 'inline-block',
                  fontSize: 'medium',
                  fontStyle: 'italic',
                }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {strippedHtmlText.charAt(0).toUpperCase() +
                  strippedHtmlText.slice(1)}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </>
  );
};

export default Definition;
