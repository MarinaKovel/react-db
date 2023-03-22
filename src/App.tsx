/* eslint-disable react/prefer-stateless-function */
import './index.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Mainpage from './pages/Mainpage';
import Aboutpage from './pages/about/Aboutpage';
import Formspage from './pages/Formspage';
import Notfoundpage from './pages/Notfoundpage';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Mainpage />} />
          <Route path="about" element={<Aboutpage />} />
          <Route path="forms" element={<Formspage />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
