import { Clock } from "./pages/Clock";
import { ItemManager } from "./pages/ItemManager";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Clock />
      <ItemManager />
    </>
  );
}

export default App;
