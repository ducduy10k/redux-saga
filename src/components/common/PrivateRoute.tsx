import * as React from 'react';
import { Navigate } from 'react-router-dom';

export interface IPrivateRouteProps {}

export function PrivateRoute(props: IPrivateRouteProps) {
  const isLoginIn = localStorage.getItem('access_token');
  if (!isLoginIn) return <Navigate to="/login"></Navigate>;
  return <div>PrivateRoute</div>;
}
