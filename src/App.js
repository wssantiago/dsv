import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home/Home.js";
import Array from "./Array/Array.js"
import Queue from "./Queue/Queue.js"
import Stack from "./Stack/Stack.js"

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Array" element={<Array/>}/>
            <Route path="/Queue" element={<Queue/>}/>
            <Route path="/Stack" element={<Stack/>}/>
        </Routes>
    </Router>
  )
}

export default App;