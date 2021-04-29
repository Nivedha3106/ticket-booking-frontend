/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
// eslint-disable-next-line import/newline-after-import
import '../index.css';
const Navbar = () => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <nav className="main">
    <h1>Seat Details</h1>
    <div className="links">
      <a
        href="/open"
        style={{
          color: 'white',
          backgroundColor: '#351cbf',
          borderRadius: '8px',
        }}
      >
        Open seats
      </a>
      <a
        href="/close"
        style={{
          color: 'white',
          backgroundColor: '#351cbf',
          borderRadius: '8px',
        }}
      >
        Close seats
      </a>
      <a
        href="/Seatstore"
        style={{
          color: 'white',
          backgroundColor: '#351cbf',
          borderRadius: '8px',
        }}
      >
        {' '}
        Add seats
      </a>
    </div>
  </nav>
);
export default Navbar;
