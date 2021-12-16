import './App.css';
import Login from './components/sessions/Login';
import Signup from './components/sessions/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import NewQuiz from './components/Quizes/NewQuiz'
import Home from './components/navigation/Home';
import PageFooter from './components/PageFooter';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/newaccount' element={<Signup />} />
          <Route exact path='/newquiz' element={<NewQuiz />} />
        </Routes>
        {/* <footer align="center" className="footer--pin">SB</footer> */}
        <div className="footer--pin">
          <PageFooter />
        </div>
      </Router>

    </div>
  );
}

export default App;
