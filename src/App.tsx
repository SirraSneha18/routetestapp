// src/App.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => (
  <div>
    {/* Renders the child route's content */}
    <Outlet />
  </div>
);

export default App;
