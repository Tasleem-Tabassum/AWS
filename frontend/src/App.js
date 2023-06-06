import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage';
import ImageDashboard from './pages/ImageDashboard';
import Feature from './pages/Feature';
import UploadImage from './pages/UploadImage';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<LoginPage />} />
          <Route exact path='/register' element={<RegisterPage />} />
          <Route exact path='/dashboard' element={<ImageDashboard />} />
          <Route exact path='/addimage' element={<UploadImage />} />
          <Route exact path='/feature' element={<Feature />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
