import Header from './assets/Header';
import Footer from './assets/Footer';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Register from './pages/register';
import Home from './pages/Home';
import LoginForm from './pages/login'; 
import Hotel_1 from './Properties/Hotel_1';
import Hotel_2 from './Properties/Hotel_2';
import Hotel_3 from './Properties/Hotel_3';
import Hotel_4 from './Properties/Hotel_4';
import Hotel_5 from './Properties/Hotel_5';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import PostProperty from './pages/PostProperty';

function App() {
  const location = useLocation();
  const hideHeader = location.pathname === '/dashboard' || location.pathname === '/post-property';

  return (
    <>
      {!hideHeader && <Header />}

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Hotel_1" element={<Hotel_1 />} />
      <Route path="/Hotel_2" element={<Hotel_2 />} />
      <Route path="/Hotel_3" element={<Hotel_3 />} />
      <Route path="/Hotel_4" element={<Hotel_4 />} />
      <Route path="/Hotel_5" element={<Hotel_5 />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/post-property"
        element={
          <ProtectedRoute>
            <PostProperty />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>

      {<Footer />}
    </>
  );
}

export default App;