import logo from './logo.svg';
import './App.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import NoPage from './pages/NoPage';
import Deneme from './pages/Deneme';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/noPage' element={<NoPage />} />
          <Route path='/deneme' element={<Deneme />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>

    
  );
}

export default App;
