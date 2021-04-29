/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable react/sort-comp */
/* eslint-disable import/no-cycle */
/* eslint-disable import/order */
/* eslint-disable import/prefer-default-export */
import React, { Component } from 'react';
import Main from './Main.js';
import '../index.css';
import axios from 'axios';

export class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ' ',
      source: ' ',
      dest: ' ',
      fare: ' ',
      time: ' ',
    };
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeSource = this.onChangeSource.bind(this);
    this.onChangeDest = this.onChangeDest.bind(this);
    this.onChangeFare = this.onChangeFare.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  compountDidMount() {
    axios.get('https://online-bus-ticket-booking.herokuapp.com/api/bookings/show/607aab8947ff5c23743ca3d7')
      .then((response) => {
        console.log(response.data);
        if (response) {
          const res = response.data.response;
          console.log(res);
          this.setState({
            name: res.name,
            source: res.source,
            dest: res.dest,
            fare: res.fare,
            time: res.time,
          });
        }
      });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeSource(e) {
    this.setState({
      source: e.target.value,
    });
  }

  onChangeDest(e) {
    this.setState({
      dest: e.target.value,
    });
  }

  onChangeFare(e) {
    this.setState({
      fare: e.target.value,
    });
  }

  onChangeTime(e) {
    this.setState({
      time: e.target.value,
    });
  }

  onSubmit(e) {
    // console.log(this.props.match.params.key);
    console.log('Update the bus');
    e.preventDefault();
    const obj = {

      name: this.state.name,
      source: this.state.source,
      dest: this.state.source,
      fare: this.state.fare,
      time: this.state.time,
    };
    console.log(obj);

    axios.post('https://online-bus-ticket-booking.herokuapp.com/bookings/update/', obj);
    alert('Updated Successfully');
    window.location.href = ('/Home');
    /* .then((response) => {
            if(response){
                alert("Updated Successfully");
                window.location.href('/Home');
            }
            else{
                alert("Updation failed");
                window.location.href("/Home");
            }
        }); */
  }

  render() {
    return (
      <div className="App">
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
              <td><input type="text" name="name" placeholder="Bus Name" value={this.state.name} onChange={this.onChangeName} required /></td>
            </tr>
            <tr>
              <td>Source Place</td>
              <td><input type="text" name="source" placeholder="Source Place" value={this.state.source} onChange={this.onChangeSource} required /></td>
            </tr>
            <tr>
              <td>Destination Place</td>
              <td><input type="text" name="dest" placeholder="Destination Place" value={this.state.dest} onChange={this.onChangeDest} required /></td>
            </tr>
            <tr>
              <td>Fare per Seat</td>
              <td><input type="text" name="fare" placeholder="Fare per Seat" value={this.state.fare} onChange={this.onChangeFare} required /></td>
            </tr>
            <tr>
              <td>Time</td>
              <td><input type="text" name="time" placeholder="Time" value={this.state.time} onChange={this.onChangeTime} required /></td>
            </tr>
            <tr aria-colspan="2">
              <td>
                <button
                  onClick={(e) => this.onSubmit(e)}
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
                  Update
                </button>
              </td>

            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
