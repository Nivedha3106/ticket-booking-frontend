/* eslint-disable import/extensions */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-console */
/* eslint-disable import/order */
/* eslint-disable import/no-cycle */
import { useEffect, useState } from 'react';
import Main from './Main.js';
import '../index.css';
import axios from 'axios';

const Userview = () => {
  const handleClick = () => {
    window.location.href = '/Home';
  };
  const [user, setuser] = useState([]);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    axios.get('https://online-bus-ticket-booking.herokuapp.com/api/tickets/').then((response) => {
      console.log(typeof (response.data));
      setuser(response.data);
      setLoading(true);
    });
  }, []);
  if (Loading) {
    return (
      <div className="App">
        <Main />
        <div className="content">
          <h2 style={{ color: 'crimson' }}>Number of Passengers booked the seats</h2>
          {user.response.map((value, key) => {
            console.log(value, key);
            return (
              <div className="home">
                <table>
                  <tbody>
                    <tr style={{
                      padding: '20px',
                    }}
                    >
                      <td>Passenger Name</td>
                      <td>{value.name}</td>
                    </tr>
                    <tr>
                      <td>Passenger's Age</td>
                      <td>{value.age}</td>
                    </tr>
                    <tr>
                      <td>Passenger's Email ID</td>
                      <td>{value.email}</td>
                    </tr>
                    <tr>
                      <td>Passenger's Phone No</td>
                      <td>{value.phone}</td>
                    </tr>
                    <tr>
                      <td>Source Place</td>
                      <td>{value.source}</td>
                    </tr>
                    <tr>
                      <td>Destination Place</td>
                      <td>{value.dest}</td>
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
export default Userview;
