import logo from './logo.svg';
import './App.css';
import Calculator from './Component/Calculator';
import HookCalculator from './Component/HookCalculator';

function App() {
  return (
    <div className="App">
      <h1>Calculator App</h1>
      <HookCalculator/>
     {/* <Calculator/> */}
    </div>
  );
}

export default App;
