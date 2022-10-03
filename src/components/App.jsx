import { SharedLayout } from 'pages/SharedLayout/SharedLayout';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProjectPage from 'pages/ProjectPage/ProjectPage';
import GraphPage from 'pages/GraphPage/GraphPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<ProjectPage />} />
        <Route path="/graph" element={<GraphPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
};
