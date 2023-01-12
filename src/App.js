import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Demo from './Demo';
import ThemeText from './features/theme/ThemeText';


function App() {
  return (
    <div className="App">
      <Counter />
      <h1>Demo App</h1>
      <Demo />
      <h1>Color Text</h1>
      <ThemeText />
    </div>
  );
}

export default App;
