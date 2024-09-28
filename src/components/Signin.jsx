import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from './Redux/authSlice.js';
import { Link,useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
 const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
   const result = await dispatch(signupUser({ email, password }));

   if(signupUser.fulfilled.match(result)){
    toast.success("User created successfully")
    navigate('/')
   }

  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form className="p-6 shadow-lg" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4">Signup</h2>
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
          {loading ? 'Signing up...' : 'Signup'}
        </button>
        <p className="mt-4">
          Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;
