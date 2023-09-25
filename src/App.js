import { BrowserRouter } from 'react-router-dom';
import Header from './component/header';
import GuestBookRoutes from './routes';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from '@mui/system';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#EF5742',
      font: 'Roboto, sans-serif'
    }
  }
});

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <BrowserRouter>
          <Box fontFamily={customTheme.palette.primary.font}>
            <Header />
            <GuestBookRoutes />
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
