import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example hardcoded login logic, replace with your API call
    if (email === 'admin@gmail.com' && password === 'admin@123') {
      onLogin({ email });  // Set user state in App/Admin component
      alert('Successfully logged in!');
      navigate('/admin/dashboard');  // Redirect after login
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-light-green">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow max-w-xs w-full">
        <h2 className="text-xl mb-6 text-primary-green font-bold">Admin Login</h2>
        <input className="mb-3 w-full p-2 border rounded" placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <input className="mb-6 w-full p-2 border rounded" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="w-full py-2 bg-primary-green text-white font-bold rounded" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

