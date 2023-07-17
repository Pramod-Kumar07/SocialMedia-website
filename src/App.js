import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import LeftSection from './components/Home/LeftSection/LeftSection';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import MiddleSection from './components/Home/MiddleSection/MiddleSection';

function App() {
  return (
    <div className={styles.App}>
      {/* <Login/> */}
      {/* <Signup/> */}
      <LeftSection/>
      <Routes>
        <Route path='/' element={<MiddleSection/>}/>
      </Routes>
    </div>
  );
}

export default App;
