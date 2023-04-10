import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [condition, setCondition] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const { status, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const handleFirstNameChange = (evt) => {
    setFirstname(evt.target.value);
  };

  const handleLastNameChange = (evt) => {
    setLastname(evt.target.value);
  };

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const handleAgeChange = (evt) => {
    setAge(evt.target.value);
  };

  const handleConditionChange = (evt) => {
    setCondition(evt.target.value);
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
    console.log(email, firstname, password, lastname, condition, age)
    dispatch(signup({ email, firstname, lastname, condition, age, password }))
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
  const isLoading = status === 'loading';
  return (
    <div className="mx-auto p-8 w-80 signin_container">
      <h1 className="text-xl font-bold mb-4 signin_container_h1">Sign Up</h1>
      <form className="ui form signin_container_form" onSubmit={handleSubmit}>
        <div className="mb-4 signin_container_form_div1">
          <label htmlFor="username-input" className="block text-gray-700 font-bold mb-2">
            Firstname
            <input
              id="username-input"
              value={firstname}
              onChange={handleFirstNameChange}
              type="text"
              placeholder="firstname"
              className="border border-gray-400 p-2 w-full rounded-lg"
            />
          </label>
        </div>
        <div className="mb-4 signin_container_form_div1">
          <label htmlFor="username-input" className="block text-gray-700 font-bold mb-2">
            Lastname
            <input
              id="username-input"
              value={lastname}
              onChange={handleLastNameChange}
              type="text"
              placeholder="lastname"
              className="border border-gray-400 p-2 w-full rounded-lg"
            />
          </label>
        </div>
        <div className="mb-4 signin_container_form_div1">
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
        <div className="mb-4 signin_container_form_div1">
          <label htmlFor="username-input" className="block text-gray-700 font-bold mb-2">
            Age
            <input
              id="username-input"
              value={age}
              onChange={handleAgeChange}
              type="number"
              placeholder="age"
              className="border border-gray-400 p-2 w-full rounded-lg"
            />
          </label>
        </div>
        <div className="mb-4 signin_container_form_div1">
          <label htmlFor="username-input" className="block text-gray-700 font-bold mb-2">
            condition
            <input
              id="username-input"
              value={condition}
              onChange={handleConditionChange}
              type="text"
              placeholder="condition"
              className="border border-gray-400 p-2 w-full rounded-lg"
            />
          </label>
        </div>
        <div className="mb-4 signin_container_form_div1">
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
         {isLoading ? 'Loading' : ' Sign Up'}
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default SignUpForm;