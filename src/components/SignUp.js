/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
import '../index.css';
import React, { useState } from 'react';
import axios from 'axios';
import Main from './Main.js';

const SignUp = () => {
  const [State, setState] = useState({
    name: ' ',
    email: ' ',
    password: ' ',
    confirmPwd: ' ',
  });
  const handleChangeName = (event) => {
    setState({
      // eslint-disable-next-line max-len
      name: event.target.value, email: State.email, password: State.password, confirmPwd: State.confirmPwd,
    });
  };
  const handleChangeEmail = (event) => {
    setState({
      // eslint-disable-next-line max-len
      name: State.name, email: event.target.value, password: State.password, confirmPwd: State.confirmPwd,
    });
  };
  const handleChangePassword = (event) => {
    setState({
      name: State.name, email: State.email, password: event.target.value, confirmPwd: State.confirmPwd,
    });
  };
  const handleChangeConfirmPwd = (event) => {
    setState({
      name: State.name, email: State.email, password: State.password, confirmPwd: event.target.value,
    });
  };
  const SignUpHandle = (event) => {
    event.preventDefault();
    const Data = {
      name: State.name, email: State.email, password: State.password, confirmPwd: State.confirmPwd,
    };
    axios.post('https://online-bus-ticket-booking.herokuapp.com/api/users/signUp', Data).then(() => {
      // eslint-disable-next-line no-alert
      alert('You have Signed Up Successfully!!');
      window.location.href = '/';
    });
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
            <td>Email</td>
            <td><input type="email" name="email" value={State.email} onChange={(e) => handleChangeEmail(e)} required /></td>
          </tr>
          <tr>
            <td>Password</td>
            <td><input type="password" name="password" value={State.password} onChange={(e) => handleChangePassword(e)} required /></td>
          </tr>
          <tr>
            <td>Confirm Password</td>
            <td><input type="password" name="confirmPwd" value={State.confirmPwd} onChange={(e) => handleChangeConfirmPwd(e)} placeholder="Confirm Password" required /></td>
          </tr>
          <tr>
            <td>
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
};
export default SignUp;
