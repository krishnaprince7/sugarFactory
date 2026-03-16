import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Admin/Layout';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import Factory from './components/Admin/Factories/Factory';
import FactoryNetworkMap from './components/Admin/Map/FactoryNetworkMap';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route index element={<Navigate to="/dashboard" />} />

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="factories" element={<Factory />} />
          <Route path="map" element={<FactoryNetworkMap />} />
          

        </Route>
      </Routes>
  );
};

export default App;