import './index.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Mainpage from './pages/Mainpage';
import Aboutpage from './pages/about/Aboutpage';
import Formpage from './pages/Formpage';
import Notfoundpage from './pages/Notfoundpage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Mainpage />} />
        <Route path="about" element={<Aboutpage />} />
        <Route path="form" element={<Formpage />} />
        <Route path="*" element={<Notfoundpage />} />
      </Route>
    </Routes>
  );
}

export default App;
