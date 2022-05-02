import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Hero from './containers/hero/hero';
import Work from './containers/work/work';

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Hero/>}/>
            <Route path="/work" element={<Work/>}/>
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
