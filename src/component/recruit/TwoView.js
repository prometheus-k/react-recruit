import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function TwoView() {
  return (
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
          이야기
        </Typography>
      </Box>

    
  );
}

export default TwoView;