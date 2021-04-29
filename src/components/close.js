/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable import/order */
/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import Navbar from './Navbar.js';
import '../index.css';
import axios from 'axios';

const Close = () => {
  const handleClick = () => {
    window.location.href = '/Home';
  };
  const [close, setclose] = useState([]);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    axios.get('https://online-bus-ticket-booking.herokuapp.com/api/seats/close').then((response) => {
      setclose(response.data);
      setLoading(true);
    });
  }, []);
  if (Loading) {
    return (
      <div className="App">
        <Navbar />
        <div className="content">
          <h2 style={{ color: 'crimson' }}>Open Seats</h2>
          {close.map((value, key) => {
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
                    width: '50px',
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
  else{
    return(
      <div></div>
    );
    
  }
};
export default Close;
