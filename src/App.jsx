import { Routes,Route } from 'react-router-dom';
import Signin from './components/Signin.jsx'
import Login from './components/Login.jsx'
import ForgotPassword from './components/ForgotPassword.jsx'
import ResetPassword from './components/ResetPassword.jsx'
import Home from './components/Home.jsx';
import { Toaster } from 'react-hot-toast'
function App() {
  return (
   
    <div className='flex'>
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
      <Toaster />
    </div>
  
  )
}

export default App