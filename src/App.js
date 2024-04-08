import NewNav from './Components/NewNav/NewNav';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <NewNav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
}