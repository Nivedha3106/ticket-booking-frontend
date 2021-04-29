/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
// eslint-disable-next-line import/newline-after-import
import '../index.css';
const Main = () => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <nav className="main">
    <h1>Online Bus Ticket Booking</h1>
    <div className="links">
      <a
        href="/Seat"
        style={{
          color: 'white',
          backgroundColor: '#351cbf',
          borderRadius: '8px',
        }}
      >
        Seat
      </a>
      <a
        href="/BusList"
        style={{
          color: 'white',
          backgroundColor: '#351cbf',
          borderRadius: '8px',
        }}
      >
        {' '}
        Bus
      </a>
    </div>
  </nav>
);
export default Main;
