/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/order */
/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
/* eslint-disable import/newline-after-import */
import { useEffect, useState } from 'react';
import Main from './Main.js';
import '../index.css';
import axios from 'axios';
const Home = () => {
  const handleClick = () => {
    window.location.href = '/Seat';
  };
  const [Bus, setBus] = useState([]);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    axios.get('https://online-bus-ticket-booking.herokuapp.com/api/bookings/').then((response) => {
      console.log(typeof (response.data));
      setBus(response.data);
      setLoading(true);
    });
  }, []);
  if (Loading) {
    return (
      <div className="App">
        <Main />
        <div className="content">
          <h2 style={{ color: 'crimson' }}>Available buses</h2>
          {Bus.response.map((value, key) => {
            console.log(value, key);
            return (
              <div className="home">
                <table>
                  <tbody>
                    <tr style={{
                      padding: '20px',
                    }}
                    >
                      <td>Bus Name</td>
                      <td>{value.name}</td>
                    </tr>
                    <tr>
                      <td>Source Place</td>
                      <td>{value.source}</td>
                    </tr>
                    <tr>
                      <td>Destination Place</td>
                      <td>{value.dest}</td>
                    </tr>
                    <tr>
                      <td>Fare per Seat</td>
                      <td>{value.fare}</td>
                    </tr>
                    <tr>
                      <td>Time</td>
                      <td>{value.time}</td>
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
                          Book Seats
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
export default Home;
