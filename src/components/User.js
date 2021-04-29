/* eslint-disable react/button-has-type */
/* eslint-disable no-alert */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable react/sort-comp */
/* eslint-disable import/no-cycle */
// import { useState } from "react";
import React, { Component } from 'react';
// eslint-disable-next-line import/extensions
import Main from './Main.js';
import '../index.css';
// eslint-disable-next-line import/order
import axios from 'axios';

class User extends Component {
  constructor() {
    super();

    this.state = {
      name: ' ',
      age: ' ',
      email: ' ',
      phone: ' ',
      source: ' ',
      dest: ' ',
    };
    this.changeName = this.changeName.bind(this);
    this.changeAge = this.changeAge.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePhone = this.changePhone.bind(this);
    this.changeSource = this.changeSource.bind(this);
    this.changeDest = this.changeDest.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.handleSubmit=this.handleSubmit(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  changeAge(event) {
    this.setState({
      age: event.target.value,
    });
  }

  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  changePhone(event) {
    this.setState({
      phone: event.target.value,
    });
  }

  changeSource(event) {
    this.setState({
      source: event.target.value,
    });
  }

  changeDest(event) {
    this.setState({
      dest: event.target.value,
    });
  }

    // eslint-disable-next-line no-unused-vars
    handleClick=(e, i) => {
      alert('Welcome');
    }

    onSubmit=(e) => {
      console.log('Submitting');
      e.preventDefault();
      const registered = {
        // eslint-disable-next-line react/destructuring-assignment
        name: this.state.name,
        age: this.state.age,
        email: this.state.email,
        phone: this.state.phone,
        source: this.state.source,
        dest: this.state.dest,

      };
      console.log(registered);
      axios.post('https://online-bus-ticket-booking.herokuapp.com/api/tickets/store', registered)
        .then(() => {
          // console.log(response.data);
          alert(`You are submitiing${this.state.name}`);
        });
      window.location.href = '/BusList';
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
                <td>Name</td>
                <td><input type="text" name="name" placeholder="Name" value={this.name} onChange={this.changeName} required /></td>
              </tr>
              <tr>
                <td>Age</td>
                <td><input type="text" name="age" placeholder="Age" value={this.age} onChange={this.changeAge} required /></td>
              </tr>
              <tr>
                <td>Email</td>
                <td><input type="email" name="email" placeholder="Email" value={this.email} onChange={this.changeEmail} required /></td>
              </tr>
              <tr>
                <td>Phone No</td>
                <td><input type="phone" name="phone" placeholder="Phone Number" value={this.phone} onChange={this.changePhone} required /></td>
              </tr>
              <tr>
                <td>Source Place</td>
                <td><input type="text" name="source" placeholder="Source Place" value={this.source} onChange={this.changeSource} required /></td>
              </tr>
              <tr>
                <td>Destination Place</td>
                <td><input type="text" name="dest" placeholder="Source Place" value={this.dest} onChange={this.changeDest} required /></td>
              </tr>
              <tr aria-colspan="2">
                <td>
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
                    Book
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
}

export default User;
