import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Hero from './containers/hero/hero';
import Work from './containers/work/work';
import Playground from './containers/playground/playground';
import NotFound from './containers/errors/notFound';

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Hero/>}/>
            <Route path="/work" element={<Work/>}/>
            <Route path="/playground" element={<Playground/>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
