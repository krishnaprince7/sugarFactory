import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Admin/Layout';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import Factory from './components/Admin/Factories/Factory';
import FactoryNetworkMap from './components/Admin/Map/FactoryNetworkMap';
<<<<<<< HEAD
import Analytics from './components/Admin/Analytics/Analytics';
=======
import Setting from './components/Admin/Settings/Setting';
>>>>>>> 56a98f9457bf424fd790f75008197d8d127e71b9

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route index element={<Navigate to="/dashboard" />} />

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="factories" element={<Factory />} />
          <Route path="map" element={<FactoryNetworkMap />} />
<<<<<<< HEAD
          <Route path="analytics" element= {<Analytics/>}/>
=======


          <Route path="settings" element={<Setting />} />



>>>>>>> 56a98f9457bf424fd790f75008197d8d127e71b9
          

        </Route>
      </Routes>
  );
};

export default App;