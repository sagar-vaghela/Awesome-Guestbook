import { BrowserRouter } from "react-router-dom";
import Header from "./component/header";
import GuestBookRoutes from "./routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/system";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#EF5742",
      font: "Roboto, sans-serif",
    },
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Box fontFamily={theme.palette.primary.font}>
            <Header />
            <GuestBookRoutes />
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
