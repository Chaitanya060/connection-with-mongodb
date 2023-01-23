import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import Navigation from './Navigation';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar } from '@material-ui/core';

function App() {
  return(
    <div className="App">
    
        <div className="App-header">
          <img src={logo} className="App-logo" style={{ width:"70px", height:"70px" }} />
          <p>CK GROUP</p>
          
        </div>
    <Navigation/>
        <div className="App-body">
      <Container>
       
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/reg' element={<Registration />} />
            </Routes>
          </BrowserRouter>
      </Container>
        </div>
    </div>
  );
}

export default App;