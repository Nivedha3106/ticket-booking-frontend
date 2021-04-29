/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable import/order */
/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import Navbar from './Navbar.js';
import '../index.css';
import axios from 'axios';

const Open = () => {
  const handleClick = () => {
    window.location.href = '/User';
  };
  const [open, setopen] = useState([]);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    axios.get('https://online-bus-ticket-booking.herokuapp.com/api/seats/open').then((response) => {
      setopen(response.data);
      setLoading(true);
    });
  }, []);
  if (Loading) {
    return (
      <div className="App">
        <Navbar />
        <div className="contene">
          <h2 style={{ color: 'crimson' }}>Open Seats</h2>
          {open.response.map((value, key) => {
            console.log(value, key);
            return (
              <div className="home">
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
                  {value.seatNo}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};
export default Open;
