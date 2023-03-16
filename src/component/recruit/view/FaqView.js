import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function FaqView() {
  return (
      <Box component="main" sx={{ p: 3 }}>
         <Toolbar />
        <Typography>
          자주묻는질문
        </Typography>
      </Box>

    
  );
}

export default FaqView;