import './App.css';
import Day from './component/Day';
import DayList from './component/DayList';
import Header from './component/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EmptyPage from './component/EmptyPage';
import DrawerAppBar from './component/recruit/DrawerAppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HeaderDrawerAppBar from './component/recruit/HeaderDrawerAppBar'


function App() {
    return (
    <DrawerAppBar/>    
  );
}

export default App;
