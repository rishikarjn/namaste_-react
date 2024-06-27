import './App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
