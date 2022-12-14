import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {
    AboutUs,
    FindUs,
    Footer,
    Header,
    NotFound,
    SpecialMenu,
} from "./container";
import {Navbar} from "./components";
import "./App.css";

const App = () => (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route  path='/' element={< Header/>}/>
                <Route  path='/home' element={< Header/>}/>
                <Route  path='/about' element={< AboutUs/>}/>
                <Route  path='/menu' element={< SpecialMenu/>}/>
                <Route  path='/contact' element={< FindUs/>}/>
                <Route  path='*' element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
);


export default App;
