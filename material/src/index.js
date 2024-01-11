import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './Pages/Auth';
import Database from './Pages/Database';
import Hosting from './Pages/Hosting';
import MachineLearning from './Pages/MachineLearning';
import Functions from './Pages/Functions';
import STorage from './Pages/STorage';
import ANalytics from './Pages/ANalytics';
import PErformance from './Pages/PErformance';
import LABtest from './Pages/LABtest';
import { ThemeProvider } from '@mui/material';
import { dashboardTheme } from './dashBoardTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.
render(
 <ThemeProvider theme= {dashboardTheme}>
   <BrowserRouter>
    <div className="app-container">   
    {/* Persistent components outside the Routes */}
    <App />
    </div>

    <Routes>
      <Route path="/" element={<div /> /* No need to render App again here */} />
      <Route path="authenticate" element={<Auth />} />
      <Route path="database" element={<Database />} />
      <Route path="storage" element={<STorage />} />
      <Route path="hosting" element={<Hosting />} />
      <Route path="functions" element={<Functions />} />
      <Route path="machineLearning" element={<MachineLearning />} />
      <Route path="analytics" element={<ANalytics />} />
      <Route path="performance" element={<PErformance />} />
      <Route path="labTest" element={<LABtest />} />
    </Routes>
  </BrowserRouter>
 </ThemeProvider>
);

reportWebVitals();
