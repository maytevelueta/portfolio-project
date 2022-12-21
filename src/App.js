import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
      <Routes>
      <Route exact path='/' element={< Home />}></Route>
      <Route path='/contact' element={< Contact />}></Route>
      <Route path='/project-listing' element={< Projects />}></Route>
      </Routes>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
