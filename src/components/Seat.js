/* eslint-disable import/extensions */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-console */
/* eslint-disable import/order */
/* eslint-disable import/no-cycle */
import { useEffect, useState } from 'react';
import Navbar from './Navbar.js';
import '../index.css';
import axios from 'axios';

const Seat = () => {
  const handleClick = () => {
    window.location.href = '/Home';
  };
  const [seat, setseat] = useState([]);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    axios.get('https://online-bus-ticket-booking.herokuapp.com/api/seats/').then((response) => {
      console.log(typeof (response.data));
      setseat(response.data);
      setLoading(true);
    });
  }, []);
  if (Loading) {
    return (
      <div className="App">
        <Navbar />
        <div className="content">
          <h2 style={{ color: 'crimson' }}>Seat Details</h2>
          {seat.response.map((value, key) => {
            console.log(value, key);
            return (
              <div className="home">
                <table>
                  <tbody>
                    <tr style={{
                      padding: '20px',
                    }}
                    >
                      <td>{value.seatNo}</td>
                    </tr>
                    <tr>
                      <td>{value.seatStatus}</td>
                    </tr>
                    <tr aria-colspan="2">
                      <td>
                        <button
                          onClick={handleClick}
                          style={{
                            color: 'white',
                            backgroundColor: '#f1356d',
                            borderRadius: '8px',
                            padding: '10px',
                            marginLeft: '250px',
                            marginTop: '30px',
                            width: '130px',
                            fontSize: '18px',
                            fontWeight: 'bold',
                          }}
                        >
                          Verify
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      </div>

    );
  }

  return (
    <div />
  );
};
export default Seat;
