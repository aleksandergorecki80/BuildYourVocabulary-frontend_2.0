import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from '@mui/material/styles/createTheme';


interface ChildProps {
  count: number;
  setPage: (page: number) => void;
}

const PaginationBar: React.FC<ChildProps> = ({ count, setPage }) => {
  const onChangeHandler = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));


  return (
    <Stack
      sx={{ alignItems: 'center', width: '100%' }}
    >
      <Pagination
        count={count}
        showFirstButton={isSmallScreen ? false : true}
        showLastButton={isSmallScreen ? false : true}
        boundaryCount={isSmallScreen ? 0 : 2}
        onChange={onChangeHandler}
        size={!isSmallScreen ? "small" : "medium"}
      />
    </Stack>
  );
};

export default PaginationBar;
