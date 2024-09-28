import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './Redux/authSlice.js';
import { Link,useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
   const result = await dispatch(loginUser({ email, password }));

   if (loginUser.fulfilled.match(result)) {
    toast.success("Login successful")
    navigate('/'); // Navigate to Home after successful login
  }
  if(loginUser.rejected.match(result)){
    toast.error("Invalid credentials")
   navigate('/signup') 
  }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form className="p-6 shadow-lg" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4">Login</h2>
        <input
          type="email"
          className="input input-bordered mb-4 w-full"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="input input-bordered mb-4 w-full"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500">{error}</p>}
        <button className="btn btn-primary w-full" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
       
        <p className="mt-4">
          Don't have an account? 
          <Link to="/signup" className="text-blue-500">Signup</Link>
        </p>
        <p className="mt-2">
          <Link to="/forgot-password" className="text-blue-500">Forgot Password?</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
