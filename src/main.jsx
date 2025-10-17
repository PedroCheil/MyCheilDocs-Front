import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Login from './screens/Login';
import Register from './screens/Register';
import './reset.scss';
import Feed from './screens/Feed';
import AnimatedRoutes from './routes/AnimationRoutes';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AnimatedRoutes />
  </BrowserRouter>
)
/* 
<Routes>
  <Route path='/' element={<Login />} />
  <Route path='/login' element={<Login />} />
  <Route path='/register' element={<Register />} />
  <Route path='/feed' element={<Feed />} />
</Routes>
*/