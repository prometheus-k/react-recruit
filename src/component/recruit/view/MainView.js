import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'mui-image'

function MainView() {
  return (
      <Box component="main" sx={{ p: 3 }}>
         <Toolbar />
          <Image src="https://kbank.recruiter.co.kr/upload/68209/site/myImage/202207/501971cf-7956-48a0-bc2c-c26fe3521003.png" />
          <Image src="https://kbank.recruiter.co.kr/upload/68209/site/myImage/202207/568c0178-4a22-42a0-8d28-e4c6c293f532.png" />
      </Box>    
  );
}

export default MainView;