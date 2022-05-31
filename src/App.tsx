import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from 'features/auth/pages/LoginPage';
import { AdminLayout } from 'components/layout';
import { NotFound, PrivateRoute } from 'components/common';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route
          path="/admin"
          element={<PrivateRoute element={<AdminLayout />}></PrivateRoute>}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
