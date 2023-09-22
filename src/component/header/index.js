import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const Header = () => {
  const theme = useTheme();
  return (
    <Box px={3} py={2} bgcolor={theme.palette.primary.main}>
      <Typography variant="h6" color={'white'}>
        Application
      </Typography>
    </Box>
  );
};

export default Header;
