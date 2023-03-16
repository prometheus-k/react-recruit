import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'mui-image'

function StoryView() {
  return (
      <Box component="main" sx={{ p: 3 }}>
         <Toolbar />
         <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
          >케미 스토리</Typography>
        <Typography>
        <Image src="https://kbank.recruiter.co.kr/upload/68209/site/myImage/202210/529b8258-b59f-4da9-a17b-0f5a26ad7625.jpg" />
        대한민국 제1호 인터넷은행 케이뱅크에서는 어떻게 일하고 있을까요?
케이뱅크에서 일하는 우리의 케미* 좋은 이야기를 공유할게요.

* 케미는 케이뱅크의 K, 그리고 친구를 뜻하는 프랑스단어 ami를 합친 말로, 아직은 채용 콘텐츠 크리에이터가 나홀로 밀고 있어요.
여러분이 케이뱅크에 합류하신 뒤, 힘을 실어주시길 기다리고 있습니다. 목이 빠져라요~
        </Typography>
      </Box>

    
  );
}

export default StoryView;