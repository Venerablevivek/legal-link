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
import AboutUs from './Pages/AboutUs';
import LegalKnowledge from './Pages/LegalKnowledge';
import AllReviews from './Pages/AllReviews';
import CheckoutSuccess from './Pages/CheckoutSuccess';
import Admin from './components/Admin/Admin';
import AdminUpdate from './components/Admin/AdminUpdate';
import ForgotPassword from './Pages/ForgotPassword.jsx';
import UpdatePassword from './Pages/UpdatePassword.jsx';
import ResetComplete from './Pages/ResetComplete.jsx';

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
      <Route path='/about-us' element={<AboutUs/>} />
      <Route path='/legal-knowledge' element={<LegalKnowledge/>} />
      <Route path='/all-reviews' element={<AllReviews/>} />
      <Route path='/checkout-success' element={<CheckoutSuccess/>} />
      <Route path='/admin-dashboard' element={<Admin/>} />
      <Route path='/admin/update/:id' element={<AdminUpdate/>} />
      <Route path='/reset-password' element={<ForgotPassword/>} />
      <Route path='/reset-complete' element={<ResetComplete/>} />
      <Route
        path="update-password/:id"
        element={
            <UpdatePassword />
        }
      />  
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
