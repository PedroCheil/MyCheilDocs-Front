import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './reset.scss';
import AnimatedRoutes from './routes/AnimationRoutes';
import "./index.css"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AnimatedRoutes />
  </BrowserRouter>
)
