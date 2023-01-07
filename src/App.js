import React, { createContext, lazy, Suspense, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Nomatch from './components/asset/Nomatch';
import Footer from './components/footerfiles/Footer';
import Register from './components/formfiles/Register';
import Flight from './components/homefiles/Flight';
import About from './components/routes/About';
const Home = lazy(()=>(import('./components/routes/Home'))) ;


export const AppContext = createContext(null)
function App() {
  const [data, setData] = useState({name:'', pwd:"", email:''})
  return (
    <AppContext.Provider value={{data, setData}} >
      {/* <Navbar /> */}
      <Suspense fallback={'Loading...'}>
      <Routes>
    <Route path='/' exact element={ <Home />} >
      <Route path='flight' element={<Flight />} />
    </Route>
    <Route path='/register' element={<Register />} />
    <Route path='/about' element={<About />} />
    <Route path='*' element={ <Nomatch />} />
      </Routes>
      </Suspense>
      <Footer />
    </AppContext.Provider>
  );
}

export default App;
