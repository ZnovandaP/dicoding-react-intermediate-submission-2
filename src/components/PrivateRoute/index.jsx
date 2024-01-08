import * as React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { getAccessToken } from '../../service/network-data';

export default function PrivateRoute() {
  const isAuth = typeof getAccessToken() === 'string';
  return isAuth ? (<Outlet />) : (<Navigate to="/login" />);
}
