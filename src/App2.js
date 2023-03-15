
import './App.css';
import Hello from './component2/Hello'
import Welcome from './component2/Welcome';
import World from './component2/World';
import styles from "./App.module.css"

function App() {
  return (
    <div className="App">
      <Hello/>
      <Welcome/>
      <div className={styles.box}>App</div>
      <World age={10}/>
      <World age={20}/>
      <World age={30}/>
    </div>
  );
}

export default App;
