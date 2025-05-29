import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Login from './screens/Login';
import Register from './screens/Register';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
    <Register />
  </StrictMode>,
)
