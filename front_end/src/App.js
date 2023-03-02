import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminContainer from './container/AdminContainer';
import NomNomContainer from './container/NomNomContainer';
import Welcome from './components/Welcome';

function App() {
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/admin/*" element={<AdminContainer />} />
        <Route path="/main/*" element={<NomNomContainer />} />
      </Routes>
    </Router>
  </>;
}

export default App;
