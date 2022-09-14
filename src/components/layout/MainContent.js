import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from "react-router-dom";
import { FormikCloneContextProvider } from '../../contexts/FormikCloneContext';
import { login } from '../../reducers/authSlice';
import ClassesPage from '../pages/ClassesPage';
import LoginPage from '../pages/LoginPage';
import SecretPage from '../pages/SecretPage';
import ProtectedRoute from '../ProtectedRoute';

export default function MainContent() {
  // const dispatch = useDispatch();
  // const token = localStorage.getItem('token');
  // if (token) {
  //   dispatch(login(token));
  // }

  return (
    <Routes>
      <Route path="/" element={<div>HOME</div>} />
      <Route path="/classes" element={<ClassesPage />} />
      <Route path="/login" element={
      <FormikCloneContextProvider>
        <LoginPage />
      </FormikCloneContextProvider>
      } />
      <Route path="/secret" element={(
        <ProtectedRoute requiresRole='teacher' element={<SecretPage />} />
      )}/>
    </Routes>
  )
}
