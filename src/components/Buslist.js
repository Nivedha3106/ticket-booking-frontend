/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
/* eslint-disable import/order */
/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
import React, { Component } from 'react';

import Main from './Main.js';
import '../index.css';
import axios from 'axios';

class BusList extends Component {
  constructor() {
    super();
    this.state = {
      name: ' ',
      source: ' ',
      dest: ' ',
      fare: ' ',
      time: ' ',
    };
    this.changeName = this.changeName.bind(this);
    this.changeSource = this.changeSource.bind(this);
    this.changeDest = this.changeDest.bind(this);
    this.changeFare = this.changeFare.bind(this);
    this.changeTime = this.changeTime.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  changeName(event) {
    this.setState({
      name: event.target.value,
    });
    // eslint-disable-next-line no-console
    console.log(this.state.name);
  }

  changeSource(event) {
    this.setState({
      source: event.target.value,
    });
    // eslint-disable-next-line no-console
    console.log(this.state.source);
  }

  changeDest(event) {
    this.setState({
      dest: event.target.value,
    });
    // eslint-disable-next-line no-console
    console.log(this.state.dest);
  }

  changeFare(event) {
    this.setState({
      fare: event.target.value,
    });
    // eslint-disable-next-line no-console
    console.log(this.state.date);
  }

  changeTime(event) {
    this.setState({
      time: event.target.value,
    });
  }

    handleUpdate=() => {
      window.location.href = '/update';
    }

    handleDelete =() => {
      window.location.href = '/delete';
    }

    onSubmit(event) {
      // eslint-disable-next-line no-console
      console.log('Enter the bus details');
      event.preventDefault();
      const register = {
        name: this.state.name,
        source: this.state.source,
        dest: this.state.dest,
        fare: this.state.fare,
        time: this.state.time,
      };

      axios.post('https://online-bus-ticket-booking.herokuapp.com/api/bookings/store', register)
        .then((response) => {
          if (response) {
            // eslint-disable-next-line no-console
            console.log(response);
            // eslint-disable-next-line no-alert
            alert('Bus details added successfully');
            window.location.href = '/Home';
          } else {
            // eslint-disable-next-line no-alert
            alert('Failed to add');
          }
        });

      // eslint-disable-next-line no-alert
      alert(`Are you submitting ${this.state.name}`);
    }

    render() {
      return (
        <div className="user">
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
                <td>Bus Name</td>
                <td><input type="text" name="name" placeholder="Bus Name" value={this.name} onChange={this.changeName} required /></td>
              </tr>
              <tr>
                <td>Source Place</td>
                <td><input type="text" name="source" placeholder="Source Place" value={this.source} onChange={this.changeSource} required /></td>
              </tr>
              <tr>
                <td>Destination Place</td>
                <td><input type="text" name="dest" placeholder="Destination Place" value={this.dest} onChange={this.changeDest} required /></td>
              </tr>
              <tr>
                <td>Fare</td>
                <td><input type="text" name="fare" placeholder="Fare per Seat" value={this.fare} onChange={this.changeFare} required /></td>
              </tr>
              <tr>
                <td>Time</td>
                <td><input type="text" name="time" placeholder="Time" value={this.time} onChange={this.changeTime} required /></td>
              </tr>
              <tr aria-colspan="2">
                // eslint-disable-next-line react/jsx-no-comment-textnodes
                <td>
                  // eslint-disable-next-line react/button-has-type
                  <button
                    onClick={this.onSubmit}
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
                    Submit
                  </button>
                </td>
              </tr>
              <tr aria-colspan="2">
                <td>
                  <button
                    onClick={this.handleUpdate}
                    style={{
                      color: 'white',
                      backgroundColor: 'blue',
                      borderRadius: '8px',
                      padding: '10px',
                      marginLeft: '250px',
                      marginTop: '30px',
                      width: '130px',
                      float: 'left',
                      fontSize: '18px',
                      fontWeight: 'bold',
                    }}
                  >
                    Update Bus
                  </button>
                </td>
              </tr>
              <tr aria-colspan="2">
                <td>
                  <button
                    onClick={this.handleDelete}
                    style={{
                      color: 'white',
                      backgroundColor: 'blue',
                      borderRadius: '8px',
                      padding: '10px',
                      marginLeft: '250px',
                      marginTop: '30px',
                      width: '130px',
                      float: 'right',
                      fontSize: '18px',
                      fontWeight: 'bold',
                    }}
                  >
                    Delete the Bus
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
}

export default BusList;
