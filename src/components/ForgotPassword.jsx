import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from './Redux/authSlice.js';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const ForgotPassword = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(forgotPassword(email));
    if (forgotPassword.fulfilled.match(result)) {
      toast.success('Verification code sent to your email');
      navigate('/reset-password'); // Navigate to Reset Password page
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form className="p-6 shadow-lg" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4">Forgot Password</h2>
        <input
          type="email"
          className="input input-bordered mb-4 w-full"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <p className="text-red-500">{error}</p>}
        <button className="btn btn-primary w-full" disabled={loading}>
          {loading ? 'Sending...' : 'Send Reset Link'}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
