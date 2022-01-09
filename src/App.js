import { useEffect, useState } from 'react';
// import { CSSTransition, Transition } from 'react-transition-group';
import './App.css';
import HomePage from './pages/HomePage';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import NamePage from './pages/NamePage';

function App() {
  const [loaderVisible, setLoaderVisible] = useState(true);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setLoaderVisible(false);
    }, 2500);
    return () => {
      window.clearInterval(timer);
    }
  }, []);
  

  return (
    <div className="App">
      {loaderVisible 
      ?
      <Loader />
      :
      <NamePage />
      }
    </div>
  );
}

export default App;
