import styles from './App.module.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div className={styles.App}>
      {/* <Login/> */}
      <Signup/>
    </div>
  );
}

export default App;
