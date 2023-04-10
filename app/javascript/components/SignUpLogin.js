import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignInForm from './SigninForm';
import SignInTForm from './SigninFormT';

const Loginsignup = () => {
  const [, setUser] = useState({});
  const [form, setForm] = useState('');
  const navigate = useNavigate();

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleFormSwitch = (input) => {
    setForm(input);
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 sp_container">
      {/* <button
        type="button"
        className="absolute top-1 left-1 sm:top-4 sm:left-4 hover:bg-indigo-600 text-white bg-green py-1 px-1 sm:py-2 sm:px-4"
        onClick={handleBack}
      >
        &laquo; Go Back
      </button> */}
      <div className="max-w-md w-full sp_container_subdiv">
        <div className="text-center text-2xl font-bold mb-8 sp_container_subdiv_inner1">
          <h1 className="text-gray-900">Welcome!</h1>
        </div>
        <div className="flex space-x-4 mb-4 sp_container_subdiv_inner2">
          <button
            type="button"
            className="bg-gray-900 text-white py-2 px-4 rounded"
            onClick={() => handleFormSwitch('signUp')}
          >
            Sign Up
          </button>
          <button
            type="button"
            className="bg-gray-900 text-white py-2 px-4 rounded sp_container_subdiv_inner1_btn1"
            onClick={() => handleFormSwitch('signupT')}
          >
            Sign Up As Therapist
          </button>
          <button
            type="button"
            className="bg-gray-200 text-gray-900 py-2 px-4 rounded sp_container_subdiv_inner1_btn2"
            onClick={() => handleFormSwitch('login')}
          >
            Log In
          </button>
        </div>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 sp_container_subdiv_inner3">
          {renderForm()}
        </div>
      </div>
    </div>
  );
};

export default Loginsignup;