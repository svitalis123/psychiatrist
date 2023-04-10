import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signupT } from '../redux/auth/authSlice';


const SignUpTForm = () => {
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const { status, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFirstNameChange = (evt) => {
    setFirstname(evt.target.value);
  };

  const handleLastNameChange = (evt) => {
    setLastname(evt.target.value);
  };

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

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(email, firstname, password, lastname)
    dispatch(signupT({ email, firstname, lastname, password }))
      .then((result) => {
        if (result.payload) {
          // successful sign up, handle user data
        } else {
          // failed sign up, handle error
        }
      });
    setEmail('');
    setPassword('');
  };

  return (
    <div className="mx-auto p-8 w-80 signt_container">
      <h1 className="text-xl font-bold mb-4 signt_container_h1">Sign Up As Therapist</h1>
      <form className="ui form signt_container_form" onSubmit={handleSubmit}>
        <div className="mb-4 signt_container_form_div">
          <label htmlFor="username-input" className="block text-gray-700 font-bold mb-2 signt_container_form_div_label">
            Firstname
            <input
              id="username-input"
              value={firstname}
              onChange={handleFirstNameChange}
              type="text"
              placeholder="username"
              className="border border-gray-400 p-2 w-full rounded-lg"
            />
          </label>
        </div>
        <div className="mb-4 signt_container_form_div">
          <label htmlFor="username-input" className="block text-gray-700 font-bold mb-2">
            Lastname
            <input
              id="username-input"
              value={lastname}
              onChange={handleLastNameChange}
              type="text"
              placeholder="username"
              className="border border-gray-400 p-2 w-full rounded-lg"
            />
          </label>
        </div>
        <div className="mb-4 signt_container_form_div">
          <label htmlFor="username-input" className="block text-gray-700 font-bold mb-2">
            Email
            <input
              id="username-input"
              value={email}
              onChange={handleEmailChange}
              type="email"
              placeholder="email"
              className="border border-gray-400 p-2 w-full rounded-lg"
            />
          </label>
        </div>
    
        <div className="mb-4 signt_container_form_div">
          <label htmlFor="password-input" className="block text-gray-700 font-bold mb-2">
            Password
            <input
              id="password-input"
              value={password}
              onChange={handlePasswordChange}
              type="password"
              placeholder="password"
              className="border border-gray-400 p-2 w-full rounded-lg"
            />
          </label>
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded signin_container_form_div1_btns" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpTForm;