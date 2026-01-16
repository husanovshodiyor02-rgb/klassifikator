import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout';
import Page1 from './pages/page1/Page1';
import Page2 from './pages/page2/Page2';
import Page3 from './pages/page3/Page3';
import Page4 from './pages/page4/Page4';
import Page5 from './pages/page5/Page5';
import Page6 from './pages/page6/Page6';
import Page7 from './pages/page7/Page7';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
          <Route path="page3" element={<Page3 />} />
          <Route path="page4" element={<Page4 />} />
          <Route path="page5" element={<Page5 />} />
          <Route path="page6" element={<Page6 />} />
          <Route path="page7" element={<Page7 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App