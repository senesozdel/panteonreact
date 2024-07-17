import './App.css';
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import NoPage from './pages/NoPage';
import BuildType from './pages/BuildType';
import TeamMembers from './pages/TeamMembers';
import BuildConfigs from './pages/BuildConfigs';
import PrivateRoute from './pages/PrivateRoute';
import Home from './pages/Home';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index  element={<PrivateRoute element={Home} />} />
        <Route path='*'  element={<NoPage />} />
        <Route path='/buildConfigs' element={<PrivateRoute element={BuildConfigs} />} />
        <Route path='/buildType' element={<PrivateRoute element={BuildType} />} />
        <Route path='/teamMembers' element={<PrivateRoute element={TeamMembers} />} />
      </Route>
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  </BrowserRouter>

    
  );
}

export default App;
