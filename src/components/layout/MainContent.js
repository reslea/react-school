import React from 'react';
import { Route, Routes } from "react-router-dom";
import Classes from '../Classes';

export default function MainContent() {
  return (
    <Routes>
      <Route path="/" element={<div>HOME</div>} />
      <Route path="/classes" element={<Classes />} />
    </Routes>
  )
}
