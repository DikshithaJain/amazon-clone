import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStatValue } from './StateProvider';

function App() {

  const [{}, dispatch] = useStatValue();
  const [email, setEmail] = useState('Guest');

  useEffect(() => {
    // will only run once when the App component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('The User Is >>> ', authUser);
      if(authUser) {
        // user is/was logged in
        setEmail(authUser.email);
        console.log(email);
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        // user is logged out
        setEmail('Guest');
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    })
  }, []);

  return (
    // BEM Convension - for class names
    // cmd + i -> emoji picker
    <Router>
      <div className="app">
      
      <Routes>
        <Route path="/login" element={
          <Login />
        } />
        <Route path='/checkout' element={
            <>
            <Header email={email}/>
            <Checkout />
            </>
          } />
          <Route path='/' element={
            <>
            <Header email={email}/>
            <Home />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
