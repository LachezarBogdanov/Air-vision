import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from './components/Home/Home';
import Schedule from './components/Schedule/Schedule';
import AirportMap from './components/AirportMap/AirportMap';
import AirlineDesk from './components/AirlineDesk/AirlineDesk';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/schedule' element={<Schedule />}></Route>
        <Route path='/airportMap' element={<AirportMap />}/>
        <Route path='/airlineDesk' element={<AirlineDesk />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
