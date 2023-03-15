
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HeaderDrawerAppBar from './component/recruit/HeaderDrawerAppBar'
import MainView from './component/recruit/MainView'
import FristView from './component/recruit/FristView'
import TwoView from './component/recruit/TwoView'
import ThreeView from './component/recruit/ThreeView'
import FourView from './component/recruit/FourView'
import EmptyPage from './component/EmptyPage';

function App() {
  const theme = createTheme({
    components: {
      // Name of the component ⚛️
      // MuiButtonBase: {
      //   defaultProps: {
      //     // The default props to change
      //     disableRipple: true, // No more ripple, on the whole application 💣!
      //   },
      // },
    },
    status: {
      danger: '#e53e3e',
    },
     palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#0F0060',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
        contrastText: '#C8F03D',
      },
      secondary: {
        light: '#0066ff',
        main: '#0044ff',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#ffcc00',
      },
      // Provide every color token (light, main, dark, and contrastText) when using
      // custom colors for props in Material UI's components.
      // Then you will be able to use it like this: `<Button color="custom">`
      // (For TypeScript, you need to add module augmentation for the `custom` value)
      custom: {
        light: '#ffa726',
        main: '#f57c00',
        dark: '#ef6c00',
        contrastText: 'rgba(0, 0, 0, 0.87)',
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
      // mode: 'dark',
    }
  });
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <BrowserRouter>
        <HeaderDrawerAppBar></HeaderDrawerAppBar>
          <Routes>
            <Route path="/" exact element={<MainView/>}></Route>
            <Route path="/FristView"element={<FristView/>}></Route>
            <Route path="/TwoView" element={<TwoView/>}></Route>
            <Route path="/ThreeView" element={<ThreeView/>}></Route>
            <Route path="/FourView" element={<FourView/>}></Route>
            <Route path="/*" element={<EmptyPage/>}></Route>
          </Routes>
        </BrowserRouter>
        </Box>
      </ThemeProvider>
    
  );
}

export default App;
