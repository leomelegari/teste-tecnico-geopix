import { Default } from "./layouts/Default";
import { Clock } from "./pages/Clock";
import { ItemManager } from "./pages/ItemManager";
import { ShyBall } from "./pages/ShyBall";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Default />
    </>
  );
}

export default App;
