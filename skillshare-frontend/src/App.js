import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Homepage from './pages/Homepage';
import UploadBlog from './pages/UploadBlog';
import UserComponents from './components/UserComponents';
import Navbar from './components/Navbar';
import AuthPage from './pages/AuthPage';
import Sidebar from './components/Sidebar';
import RightSidebar from './components/RightSidebar';
import Footer from './components/Footer';
import './App.css';
import {jwtDecode} from 'jwt-decode';

function App() {
  const [user, setUser] = useState(null);
  const [isTokenValid, setIsTokenValid] = useState(null);
  useEffect (() => {
    const checkToken = () =>{
      const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp > currentTime) {
          setIsTokenValid(true)
          setUser(decodedToken)
        }else{
          setIsTokenValid(false)
        }
      } catch (error) {
        setIsTokenValid(false)
      }
    }else{
      setIsTokenValid(false)
      }
    }
    checkToken()
    window.addEventListener('storage', checkToken);
    return () => {window.removeEventListener('storage', checkToken)}
  },[])
  return (
    <Router>
      <div className="app-container">
        <Navbar isTokenValid = {isTokenValid} user = {user}/>
        <MainLayout />
        <Footer />
      </div>
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  return (
    <div className={isHomepage ? 'main-content-with-sidebar' : 'main-content-full'}>
      {isHomepage && <Sidebar />}
      <div className={isHomepage ? '' : 'centered-box'}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/upload" element={<UploadBlog />} />
          <Route path="/profile" element={<UserComponents />} />
        </Routes>
      </div>
      {isHomepage && <RightSidebar />}
    </div>
  );
}

export default App;
