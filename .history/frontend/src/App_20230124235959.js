import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <>
      <div>
      <Router>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
