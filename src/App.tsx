import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero from './containers/hero/hero';
import Work from './containers/work/work';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/work" element={<Work/>}/>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
