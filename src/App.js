import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Globalstyle from './styles/global';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <Globalstyle />
    </BrowserRouter>
  );
}

export default App;
