import React, { createContext, lazy, Suspense, useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Nomatch from './components/asset/Nomatch';
import Footer from './components/footerfiles/Footer';
import Register from './components/formfiles/Register';
import Flight from './components/homefiles/Flight';
import About from './components/routes/About';
import Navbar from './components/navbarfiles/Navbar';
import { AppProvider } from './components/asset/Context';
const Home = lazy(()=>(import('./components/routes/Home'))) ;


export const AppContext = createContext(null)
function App() {


  const [data, setData] = useState({name:'', pwd:"", email:''})

  
  const globalData ={data, setData}
  return (
    <AppProvider >
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
    </AppProvider>
  );
}

export default App;


