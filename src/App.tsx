/* eslint-disable react/prefer-stateless-function */
import './App.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';

import Mainpage from './pages/Mainpage';
import Aboutpage from './pages/About';
import Notfoundpage from './pages/Notfoundpage';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Mainpage />} />
          <Route path="about" element={<Aboutpage />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
