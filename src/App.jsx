import './App.css';
import Navbar from './components/Header/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react';
import Recipe from './components/Recipe';
import Ingrediant from './components/Ingrediant';
import MyKitchen from './components/MyKitchen';


function App() {
  return (
    <Router>
     <Navbar />
     <Routes>
              <Route  path="/my-kitchen" element={<MyKitchen />}></Route>
              <Route  path="/recipe" element={ <Recipe />}> </Route>
              <Route  path="/ingrediant"  element={<Ingrediant />}></Route>
    ]</Routes>
     </Router>
  );
}

export default App;
