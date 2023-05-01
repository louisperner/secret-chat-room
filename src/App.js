import "./App.css";

import LettersRain from "./components/LettersRain";
import Canvas3D from "./components/Canvas3D";
import Beer from "./components/Banner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"./logo.avif"} className="App-logo" alt="logo" />
      </header>
      <div>
          <Beer />
          <LettersRain />
          <Canvas3D />
      </div>
    </div>
  );
}

export default App;
