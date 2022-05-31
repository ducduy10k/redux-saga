import * as React from 'react';
import { Navigate, Route } from 'react-router-dom';

export interface IPrivateRouteProps {
  element: React.ReactNode | null;
  [key: string]: any;
}

export function PrivateRoute(props: IPrivateRouteProps) {
  const isLoginIn = Boolean(localStorage.getItem('access_token'));
  if (!isLoginIn) return <Navigate to="/login"></Navigate>;
  return <Route {...props} />;
}
