import React from 'react'
import './App.css'
import { BrowserRouter as Router,Route,Routes  }  from 'react-router-dom';
import Register from './Auth/Register';
import Login from './Auth/Login';
import Dashboard from './pages/Dashboard'
const App = () => {
  return (
   <Router>
    <Routes>
      <Route path='/Register' element = {<Register/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/dashboard' element = {<Dashboard/>}/>


      
    </Routes>
   </Router>
  )
}

export default App
