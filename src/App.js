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

  //disable dbclick for img
  function click (e) {
    if (!e)
      e = window.event;
    if ((e.type && e.type == "contextmenu") || (e.button && e.button == 2) || (e.which && e.which == 3)) {
      if (window.opera)
        window.alert("");
      return false;
    }
  }
  if (document.layers)
    document.captureEvents(Event.MOUSEDOWN);
  document.onmousedown = click;
  document.oncontextmenu = click;

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
