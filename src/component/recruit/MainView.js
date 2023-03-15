import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function MainView() {
  return (
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
          메인 화면입니다.
        </Typography>
      </Box>

    
  );
}

export default MainView;