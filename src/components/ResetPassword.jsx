import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from './Redux/authSlice.js';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'

const ResetPassword = () => {
   // Fetch token from URL
  const [newPassword, setNewPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [email,setEmail] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
   const result = await dispatch(resetPassword({ email,verificationCode, newPassword }));

   if(resetPassword.fulfilled.match(result)) {
    toast.success('Password reset successfully')
    navigate('/login');
  };
}

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form className="p-6 shadow-lg" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4">Reset Password</h2>
        <input
          type="password"
          className="input input-bordered mb-4 w-full"
          placeholder="New Password"
          name='newPassword'
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        /> <br />
        <input
          type="text"
          className="input input-bordered mb-4 w-full"
          placeholder="One Time Password"
          name='verificationCode'
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        /> <br />
        <input
          type="email"
          className="input input-bordered mb-4 w-full"
          placeholder="email"
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> <br />
        {error && <p className="text-red-500">{error}</p>}
        <button className="btn btn-primary w-full" disabled={loading}>
          {loading ? 'Resetting...' : 'Reset Password'}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
