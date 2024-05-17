import './App.css'
import ContactUs from './Pages/ContactUs';
import HomePage from './Pages/HomePage'
import {Routes, Route, useNavigate} from "react-router-dom";
import Register from './Pages/Register';
import Login from './Pages/Login';
import { useSelector } from 'react-redux';
import LawyerDashboard from './components/Lawyer/LawyerDashboard';
import UserDashboard from './components/User/UserDashboard';
import SearchLawyer from './Pages/SearchLawyer';
import LawyerBooking from './Pages/LawyerBooking';

function App() {

  const navigate = useNavigate();
  const { user } = useSelector((state) => state.profile);

  return (
  <div className='w-full h-full ' >
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/contact-us' element={<ContactUs/>} />
      <Route path='/search-lawyer' element={<SearchLawyer/>} />
      <Route path='/book-lawyer/:id' element={<LawyerBooking/>} />
      <Route path='/register' element={
                <Register/>
            } />
            <Route path='/login' element={
                <Login />
            } />
      {
        user && (<Route path='/dashboard/lawyer/my-profile' element={
          <LawyerDashboard/>
      } />)
      }
      {
        user && (<Route path='/dashboard/user/my-profile' element={
          <UserDashboard/>
      } />)
      }
    </Routes>
  </div>
  )
}

export default App
