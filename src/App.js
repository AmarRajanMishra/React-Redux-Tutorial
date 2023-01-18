import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Demo from './Demo';
import ThemeText from './features/theme/ThemeText';
import About from './About';
import { useSelector } from 'react-redux'


function App() {
  const myColor = useSelector((state)=> state.theme.value)

  return (
    <div className="App">
      <Counter />
      <h1 style={{color : myColor}}>Demo App</h1>
      <Demo />
      <h1>Color Text</h1>
      <ThemeText />
      <h1>My About Page</h1>
      <About />
    </div>
  );
}

export default App;
