import React from 'react';
import Button from '@mui/material/Button';

interface ButtonProps {
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
}

const BrandButton: React.FC<ButtonProps> = ({
  children,
  color,
}) => {
  return (
    <Button variant="contained" color={color} disableElevation>
      {children}
    </Button>
  );
};

export default BrandButton;
