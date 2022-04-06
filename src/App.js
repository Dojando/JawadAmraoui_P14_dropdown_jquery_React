import './App.css';
import { Dropdown } from "./lib/index"

function App() {

  function test(e) {
    console.log(e);
  }

  return (
    <div className="App">
      <Dropdown data={["test", "test2", "test3"]} getValue={(e) => test(e)} />
    </div>
  );
}

export default App;
