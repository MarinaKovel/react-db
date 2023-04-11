import '../index.scss';
import { Routes, Route } from 'react-router-dom';
import { Mainpage, Aboutpage, Formpage, Notfoundpage } from '@pages';
import { Layout } from '@components';

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
