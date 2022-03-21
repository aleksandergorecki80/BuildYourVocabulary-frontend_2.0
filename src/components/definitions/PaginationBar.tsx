import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface ChildProps {
  count: number;
  setPage: (page: number) => void;
}

const PaginationBar: React.FC<ChildProps> = ({ count, setPage }) => {
  const onChangeHandler = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  return (
    <Stack
      sx={{ alignItems: 'center', width: '100%' }}
    >
      <Pagination
        count={count}
        showFirstButton
        showLastButton
        onChange={onChangeHandler}
        size="small"
      />
    </Stack>
  );
};

export default PaginationBar;
