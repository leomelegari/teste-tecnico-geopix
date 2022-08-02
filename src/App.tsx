import { Default } from "./layouts/Default";
import { GlobalStyle } from "./styles/global";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Default />
      <ToastContainer />
    </>
  );
}

export default App;
