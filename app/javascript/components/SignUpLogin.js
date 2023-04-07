import React, { useState } from 'react'; 
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignInForm from './SigninForm';
import SignInTForm from './SigninFormT';

const Loginsignup = () => {
  const [, setUser] = useState({});
  const [form, setForm] = useState('');
  const selector = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleFormSwitch = (input) => {
    setForm(input);
  };

  const handleAuthClick = () => {
    const token = selector;
    fetch('http://127.0.0.1:8000/user_is_authed', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => data);
  };

  const renderForm = () => {
    switch (form) {
      case 'login':
        return <LoginForm handleLogin={handleLogin} />;
      case 'signupT':
        return <SignInTForm handleLogin={handleLogin} />;
      default:
        return <SignInForm handleLogin={handleLogin} />;
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* <button
        type="button"
        className="absolute top-1 left-1 sm:top-4 sm:left-4 hover:bg-indigo-600 text-white bg-green py-1 px-1 sm:py-2 sm:px-4"
        onClick={handleBack}
      >
        &laquo; Go Back
      </button> */}
      <div className="max-w-md w-full">
        <div className="text-center text-2xl font-bold mb-8">
          <h1 className="text-gray-900">Welcome!</h1>
        </div>
        <div className="flex space-x-4 mb-4">
          <button
            type="button"
            className="bg-gray-900 text-white py-2 px-4 rounded"
            onClick={() => handleFormSwitch('signUp')}
          >
            Sign Up
          </button>
          <button
            type="button"
            className="bg-gray-900 text-white py-2 px-4 rounded"
            onClick={() => handleFormSwitch('signupT')}
          >
            Sign Up As Therapist
          </button>
          <button
            type="button"
            className="bg-gray-200 text-gray-900 py-2 px-4 rounded"
            onClick={() => handleFormSwitch('login')}
          >
            Log In
          </button>
        </div>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {renderForm()}
        </div>
        <button
          type="button"
          onClick={handleAuthClick}
          className="bg-gray-900 text-white py-2 px-4 rounded"
        >
          Access Authorized Route
        </button>
      </div>
    </div>
  );
};

export default Loginsignup;