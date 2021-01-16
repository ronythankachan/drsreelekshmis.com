import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';

function App() {
  return (
    <Router>
        <Home/>
        <Footer/>
    </Router>
  );
}

export default App;
