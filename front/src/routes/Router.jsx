import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Evento from '../pages/evento/evento.jsx';
import Login from '../pages/login/login.jsx';
import Navbar from '../components/navbar/navbar.jsx';

const Layout = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        
        {/* Rotas com Navbar */}
        <Route element={<Layout />}>
          <Route path="/evento" element={<Evento />} />
          <Route path="/user/:id" element={<Evento />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
