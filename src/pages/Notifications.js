import React, { Component } from 'react'
import Toggle from 'react-toggle'
import { Container, Row, Col, Card, Table, Jumbotron } from 'react-bootstrap'
import Loc from '../locations.json'
import firebase from "firebase";

class Notifications extends Component {
  componentWillMount() {
    let config = {
      apiKey: "AIzaSyA4-Smy2VEb5N2R004jkUyk3waFO9sLFo0",
      authDomain: "suprimidos-95969.firebaseapp.com",
      databaseURL: "https://suprimidos-95969.firebaseio.com",
      projectId: "suprimidos-95969",
      storageBucket: "suprimidos-95969.appspot.com",
      messagingSenderId: "741950318441"
    };

    console.log(config)
    firebase.initializeApp(config);
    this.initializePush()
  }

  initializePush() {
    const messaging = firebase.messaging();
    messaging
      .requestPermission()
      .then(() => {
        console.log("Have Permission");
        return messaging.getToken();
      })
      .then(token => {
        console.log("FCM Token:", token);
        localStorage.setItem('tokenFB', token)
        //you probably want to send your new found FCM token to the
        //application server so that they can send any push
        //notification to you.
      })
      .catch(error => {
        if (error.code === "messaging/permission-blocked") {
          console.log("Please Unblock Notification Request Manually");
        } else {
          console.log("Error Occurred", error);
        }
      });
  }

  renderToggle(location) {
    let status = localStorage.getItem('not-' + location.key)

    return (
      <Row key={location.key}>
        <label>
          <Toggle
            defaultChecked={this.bool(status)}
            value={location.key}
            onChange={this.handleNotificationChange} />
          <span> {location.value}</span>
        </label>
      </Row>
    )
  }

  handleNotificationChange(e) {
    if (e.target.checked) {
      localStorage.setItem('not-' + e.target.value, true)
      const request = new Request(`https://tomahock.com/cenas/suprimidos/notifications.php?topic=${e.target.value}&token=${localStorage.getItem('tokenFB')}`, {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        })
      })
      return fetch(request).then(response => {
        if (response.status === 200) {
          console.log(response)
        }
        return response.json().then(response => { throw (response) })
      }).catch(error => {
        throw (error)
      })
    } else {
      localStorage.setItem('not-' + e.target.value, false)
    }
  }

  handleNotifications() {
    let allNotifications = []
    for (let location of Loc.locations) {
      allNotifications = [...allNotifications, this.renderToggle(location)]
    }
    return allNotifications
  }

  bool(v) { return v === "false" || v === "null" || v === "NaN" || v === "undefined" || v === "0" ? false : !!v; }


  render() {
    return (
      <div className="Notifications">
        <Container>
          <h1>Notificações</h1>
          {this.handleNotifications()}
        </Container>
      </div>
    )
  }
}

export default Notifications
