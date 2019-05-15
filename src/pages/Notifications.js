import React, { Component } from 'react'
import Toggle from 'react-toggle'
import { Container, Row, Jumbotron } from 'react-bootstrap'
import Loc from '../locations.json'
import LocBoat from '../locations-boats.json'
import firebase from "firebase";

class Notifications extends Component {
  componentWillMount() {

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
            onChange={(e) => {this.handleNotificationChange(e)}} />
          <span> {location.value}</span>
        </label>
      </Row>
    )
  }

  handleNotificationChange(e) {
    this.sendEvent(e.target.value)

    if (e.target.checked) {
      localStorage.setItem('not-' + e.target.value, true)
      const request = new Request(`https://api.suprimidos.pt/notifications.php?topic=${e.target.value}&token=${localStorage.getItem('tokenFB')}`, {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        })
      })
      return fetch(request).then(response => {
        if (response.status === 200) {
          
        }
        return response.json().then(response => { throw (response) })
      }).catch(error => {
        throw (error)
      })
    } else {
      localStorage.setItem('not-' + e.target.value, false)

      const request = new Request(`https://api.suprimidos.pt/notifications-u.php?topic=${e.target.value}&token=${localStorage.getItem('tokenFB')}`, {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        })
      })
      return fetch(request).then(response => {
        if (response.status === 200) {
          
        }
        return response.json().then(response => { throw (response) })
      }).catch(error => {
        throw (error)
      })
    }

    
  }

  renderNotificationNotSupported() {
    return (
      <div className="no-auth is-not-supported">
        <p>O seu browser não suporta notificações :'(</p>
        <p>Experimente usar o <a href="https://www.google.com/chrome/" target="_blank" rel="noopener noreferrer">Google Chrome</a> ou o <a href="https://www.mozilla.org/en-US/firefox/" target="_blank" rel="noopener noreferrer">Firefox</a>!</p>
      </div>
    )
  }

  clearNotifications() {
    localStorage.clear();
    window.location.reload();
  }

  renderNotificationTroubleshoting() {
    return(
      <section key={1} className="bg-white">
          <div className="card col-12">
              <div className="card-body">
                  <div className="row">
                      <div className="col-12">
                          <h3>Problemas com as notificações?</h3>
                          <button type="button"
                                  onClick={() => { this.clearNotifications() }}
                                  className="btn btn-outline-success btn-lg btn-block js-notifications-reset">Clique Aqui</button>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }

  handleNotifications() {
    let tokenFB = localStorage.getItem('tokenFB')

    if (tokenFB) {
      let allNotifications = []
      for (let location of Loc.locations) {
        allNotifications = [...allNotifications, this.renderToggle(location)]
      }

      allNotifications = [...allNotifications]
      return allNotifications
    }

    return (
      <div className="no-auth is-supported">
        <div className="row">
          <div className="col-12">
            <p className="text-center">Para receber notificações de novos comboios ou barcos suprimidos, clique no
                  botão ao lado para iniciar a autorização.</p>
          </div>
          <div className="col-12">
            <button onClick={() => { this.startFirebase() }} type="button"
              className="btn btn-outline-success btn-lg btn-block">Quero
          receber notificações.
              </button>
          </div>
        </div>
      </div>
    )
  }

  renderBoatsHeader() {
    return(
      <h1>Barcos</h1>
    )
  }

  handleBoatNotifications() {
    let tokenFB = localStorage.getItem('tokenFB')

    if (tokenFB) {
      let allBoatNotifications = [this.renderBoatsHeader()]
      for (let location of LocBoat.locations) {
        allBoatNotifications = [...allBoatNotifications, this.renderToggle(location)]
      }

      allBoatNotifications = [...allBoatNotifications, this.renderNotificationTroubleshoting()]
      return allBoatNotifications
    }

    return (
      <div className="no-auth is-supported">
        <div className="row">
          <div className="col-12">
            <p className="text-center">Para receber notificações de novos comboios ou barcos suprimidos, clique no
                  botão ao lado para iniciar a autorização.</p>
          </div>
          <div className="col-12">
            <button onClick={() => { this.startFirebase() }} type="button"
              className="btn btn-outline-success btn-lg btn-block">Quero
          receber notificações.
              </button>
          </div>
        </div>
      </div>
    )
  }


  startFirebase() {
    let config = {
      apiKey: "AIzaSyA4-Smy2VEb5N2R004jkUyk3waFO9sLFo0",
      authDomain: "suprimidos-95969.firebaseapp.com",
      databaseURL: "https://suprimidos-95969.firebaseio.com",
      projectId: "suprimidos-95969",
      storageBucket: "suprimidos-95969.appspot.com",
      messagingSenderId: "741950318441"
    };

    firebase.initializeApp(config);
    this.initializePush()

    setTimeout(function(){window.location.reload()},1000);
  }

  bool(v) { return v === "false" || v === "null" || v === "NaN" || v === "undefined" || v === "0" ? false : !!v; }

  handleWhatToRender() {
    if (!window.PushManager || document.documentMode || /Edge/.test(navigator.userAgent)) {
      return this.renderNotificationNotSupported();
    }

    return [ this.handleNotifications(), this.handleBoatNotifications()]
  }

  sendEvent(line) {
    if (window.ga) {
      if ("ga" in window && typeof window.ga.getAll === "function") {
        var tracker = window.ga.getAll()[0];
        if (tracker)
          tracker.send("event", line, '1', "click", '2');
      }
    }
  }

  render() {
    return (
      <div className="Notifications">
        <Jumbotron fluid>
          <Container>
            <h1 className="text-center">Notificações</h1>
            {this.handleWhatToRender()}
          </Container>
        </Jumbotron>
      </div>
    )
  }
}

export default Notifications
