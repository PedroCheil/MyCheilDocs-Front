import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './reset.scss';
import AnimatedRoutes from './routes/AnimationRoutes';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AnimatedRoutes />
  </BrowserRouter>
)
