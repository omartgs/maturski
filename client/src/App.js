import React from "react";
import { Container, } from '@material-ui/core';
import { Routes ,Route , BrowserRouter } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar.js";
import Home from './components/Home/Home.js';

const App = () => {

    return(
      <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Container>
    </BrowserRouter>

    );
}

export default App;