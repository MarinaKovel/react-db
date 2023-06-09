import { Routes, Route } from 'react-router-dom';
import { Mainpage, Aboutpage, Formpage, Notfoundpage } from '@pages';
import { Layout } from '@components';
import { Suspense } from 'react';
import { SyncLoader } from 'react-spinners';
import '../index.scss';

function App() {
  return (
    <Suspense fallback={<SyncLoader color="#f4f750" size={25} />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Mainpage />} />
          <Route path="about" element={<Aboutpage />} />
          <Route path="form" element={<Formpage />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
