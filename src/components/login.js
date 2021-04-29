/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/order */
/* eslint-disable import/no-cycle */
// eslint-disable-next-line import/extensions
import Main from './Main.js';
import React, { useState } from 'react';
import '../index.css';
import axios from 'axios';

const UserLogin = () => {
  const [State, setState] = useState({
    name: ' ',
    password: ' ',
  });
  const handleChangeName = (event) => {
    setState({ name: event.target.value, password: State.password });
  };
  const handleChangePassword = (event) => {
    setState({ name: State.name, password: event.target.value });
  };
  const LoginHandle = (event) => {
    event.preventDefault();
    const Data = { name: State.name, password: State.password };
    axios.post('https://online-bus-ticket-booking.herokuapp.com/api/users/login', Data).then(() => {
      // eslint-disable-next-line no-alert
      alert('You are logged in successfully!!');
      // sessionStorage.setItem('UserID',response.data.response._id);
      window.location.href = '/Home';
    });
  };
  const SignUpHandle = () => {
    window.location.href = '/SignUp';
  };

  return (
    <div className="login">
      <Main />
      <table style={{
        padding: '25px',
        margin: '25px',
        border: '1px solid black',
      }}
      >
        <tbody>
          <tr style={{
            padding: '25px',
          }}
          >
            <td>Name</td>
            <td><input type="name" name="name" value={State.name} onChange={(e) => handleChangeName(e)} required /></td>
          </tr>
          <tr>
            <td>Password</td>
            <td><input type="password" name="password" value={State.password} onChange={(e) => handleChangePassword(e)} required /></td>
          </tr>
          <tr aria-colspan="2">
            <td>
              <button
                onClick={LoginHandle}
                style={{
                  color: 'white',
                  backgroundColor: 'blue',
                  borderRadius: '8px',
                  padding: '10px',
                  marginLeft: '250px',
                  marginTop: '30px',
                  width: '130px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                }}
              >
                Login
              </button>
            </td>
            <td>
              <p>Don't have an account already? Sign Up!!</p>
              <button
                onClick={SignUpHandle}
                style={{
                  color: 'white',
                  backgroundColor: 'blue',
                  borderRadius: '8px',
                  padding: '10px',
                  marginLeft: '250px',
                  marginTop: '30px',
                  width: '130px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                }}
              >
                SignUp
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  // }
};
export default UserLogin;
