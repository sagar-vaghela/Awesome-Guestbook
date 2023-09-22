import { BrowserRouter } from "react-router-dom";
import Header from "./component/header";
import GuestBookRoutes from "./routes";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <GuestBookRoutes />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
