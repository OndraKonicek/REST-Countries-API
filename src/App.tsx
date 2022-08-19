import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { MainRoutes } from './routes/MainRoutes';

function App() {
   return (
      <>
         <Header />
         <MainRoutes />
      </>
   );
}

export default App;
