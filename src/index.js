import React from 'react';
import ReactDOM from "react-dom/client";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Detalles from './routes/Detalles.js';
import Detalles2 from './routes/Detalles2.js';
import './index.css';
import App from './App';

const root=ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="Detalles" element={<Detalles/>}/>
        <Route path="Detalles2" element={<Detalles2/>}/>
    </Routes>
  </BrowserRouter>
);
