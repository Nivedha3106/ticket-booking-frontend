/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/order */
/* eslint-disable import/extensions */
import { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-cycle
// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/no-cycle
import Main from './Main.js';
import '../index.css';
import axios from 'axios';

const Delete = () => {
  const handleClick = (bookingID) => {
    axios.get(`https://online-bus-ticket-booking.herokuapp.com/api/bookings/destroy/${bookingID}`)
      .then((response) => {
        if (response) {
          // eslint-disable-next-line no-alert
          alert('deleted successfully');
          // eslint-disable-next-line no-console
          console.log(response.data);
          window.location.href = '/BusList';
        } else {
          // eslint-disable-next-line no-alert
          alert('Failed');
          window.location.href = '/delete';
        }
      });
  };
  const [Bus, setBus] = useState([]);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    axios.get('https://online-bus-ticket-booking.herokuapp.com/api/bookings')
      .then((response) => {
        // eslint-disable-next-line no-console
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

          {Bus.response.map((value, key) => {
            // eslint-disable-next-line no-console
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
                      <td>Destination</td>
                      <td>{value.dest}</td>
                    </tr>
                    <tr>
                      <td>Fare per State</td>
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
                          Delete
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
export default Delete;
