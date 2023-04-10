
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/auth/authSlice';

const LoginForm = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  useEffect(() => {
    if (status === 'succeeded') {
      navigate('/home');
    }
  }, [status, navigate]);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    dispatch(login({ email, password })).then((result) => {
      if (result.payload) {
        localStorage.setItem('token', result.payload.jwt);
        handleLogin(result.payload.user);
      }
    });
  };

  const isLoading = status === 'loading';

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-2/3 bg-gray-100 rounded-lg p-8 logint_container">
        <h1 className="text-2xl mb-4">Log In</h1>
        <form className="ui form logint_container_form" onSubmit={handleSubmit}>
          <div className="mb-4 logint_container_form_div">
            <label htmlFor="username" className="block font-bold mb-2">
              Email
              <input
                id="username"
                value={email}
                onChange={handleEmailChange}
                type="email"
                placeholder="email"
                className="block appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>
          <div className="mb-4 logint_container_form_div">
            <label htmlFor="password" className="block font-bold mb-2">
              Password
              <input
                id="password"
                value={password}
                onChange={handlePasswordChange}
                type="password"
                placeholder="password"
                className="block appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>
          <div className="flex flex-col justify-between items-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline signin_container_form_div1_btns"
              type="submit"
            >
              {isLoading ? 'Loading' : 'Log In'}
            </button>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default LoginForm;