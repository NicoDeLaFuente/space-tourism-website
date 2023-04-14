import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HeroIndex from './Pages/HeroIndex/HeroIndex';
import HeroDestination from './Pages/HeroDestination/HeroDestination';
import HeroCrew from './Pages/HeroCrew/HeroCrew';
import HeroTechnology from './Pages/HeroTechnology/HeroTechnology';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HeroIndex/>}/>
        <Route exact path='/destination' element={<HeroDestination/>}/>
        <Route exact path='/crew' element={<HeroCrew/>}/>
        <Route exact path='/technology' element={<HeroTechnology/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
