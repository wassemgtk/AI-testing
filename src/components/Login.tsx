import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const authContext = useContext(AuthContext);
  const history = useHistory();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await authContext.login(email, password);
      history.push('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {error && <p>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;