import Routes from './routes';
import {BrowserRouter} from "react-router-dom";
import {GlobalStyle} from "./styles/GlobalStyle"

function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </>
  );
}

export default App;
