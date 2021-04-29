/* eslint-disable import/extensions */
/* eslint-disable import/order */
/* eslint-disable react/button-has-type */
/* eslint-disable no-alert */
import Navbar from './Navbar.js';
import React, { useState } from 'react';
import '../index.css';
import axios from 'axios';

const Seatstore = () => {
  const [State, setState] = useState({
    seatNo: ' ',
    seatStatus: ' ',
  });
  const handleChangeSeatNo = (event) => {
    setState({ seatNo: event.target.value, seatStatus: State.seatStatus });
  };
  const handleChangeSeatStatus = (event) => {
    setState({ seatNo: State.seatNo, seatStatus: event.target.value });
  };
  const SeatHandle = (event) => {
    event.preventDefault();
    const Data = { seatNo: State.seatNo, seatStatus: State.seatStatus };
    axios.post('https://online-bus-ticket-booking.herokuapp.com/api/seats/store', Data).then(() => {
      alert('Seat details are added successfully');
      window.location.href = '/Navbar';
    });
  };
  return (
    <div className="login">
      <Navbar />
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
            <td>Seat Number</td>
            <td><input type="number" name="seatNo" value={State.seatNo} onChange={(e) => handleChangeSeatNo(e)} required /></td>
          </tr>
          <tr>
            <td>Password</td>
            <td><input type="text" name="seatStatus" value={State.seatStatus} onChange={(e) => handleChangeSeatStatus(e)} required /></td>
          </tr>
          <tr aria-colspan="2">
            <td>
              <button
                onClick={SeatHandle}
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
                Book your seat
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Seatstore;
