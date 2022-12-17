import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import Payment from './pages/Payment';
import NewStudy from './pages/NewStudy';
<<<<<<< HEAD
import Login from './components/Login';
import Register from './components/Register';
=======
import StudyDetail from './pages/StudyDetail';
>>>>>>> 9b1f62b21f1490e5f434b5363464212020f1d41c
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='' element={<Home />} />
            <Route path='study' element={<StudyDetail />} />
            <Route path='new' element={<NewStudy />} />
            <Route path='mypage' element={<MyPage />} />
            <Route path='payment' element={<Payment />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
