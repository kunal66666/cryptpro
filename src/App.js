
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Show from './pages/Show';
import './style.scss'

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path ="/:id" element={<Show/>}/>
    
    </Routes>
   </BrowserRouter>

  );
}

export default App;
