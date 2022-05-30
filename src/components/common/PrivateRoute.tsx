import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export interface IPrivateRouteProps {}

export function PrivateRoute(props: IPrivateRouteProps) {
  let navigate = useNavigate();
  const isLoginIn = localStorage.getItem('access_token');
  if (!isLoginIn) return navigate('/login');
  return <div>PrivateRoute</div>;
}
