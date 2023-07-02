import React from 'react'
import './App.css'
import Registerpage from './Components/Login/Registerpage'
import Loginpage from './Components/Login/Loginpage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './Components/Main'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loginpage/>}/>
        <Route path='/register' element={<Registerpage/>}/>
        <Route path='/Main' element={<Main/>}/>
      </Routes>
    </BrowserRouter>
    
      
      
    </div>
  );
}

export default App;
