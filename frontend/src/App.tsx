import GeoMap from './GeoMap';
import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router';

const App = () => {
  return (
    <div className="App h-screen block lg:flex">
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate replace to="/map" />} />
          <Route path="/map" element={<GeoMap />} />
        </Routes>
      </div>
  </div>
  );
};

export default App;