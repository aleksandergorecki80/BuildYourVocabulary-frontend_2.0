import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';

import { useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useAppActions } from '../../hooks/useActions';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const { resetGame } = useAppActions();

  const {
    app: { word, isAnswerShown },
  } = useTypedSelector((state) => {
    return {
      app: state.app,
    };
  });

  useEffect(() => {
    setOpen(isAnswerShown);
  }, [isAnswerShown]);

  const handleClose = () => {
    setOpen(false);
    resetGame();
  };

  return (
    <div>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{' The answer is:'}</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              color: 'primary.main',
              fontSize: 28,
              fontWeight: 'medium',
              textAlign: 'center',
            }}
          >
            {`${word.slice(0, 1).toUpperCase()}${word.slice(1, word.length)}`}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={handleClose}
            size="large"
            fullWidth
            autoFocus
          >
            Try again
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
