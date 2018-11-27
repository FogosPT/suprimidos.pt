import React, { Component } from 'react'
import Toggle from 'react-toggle'
import { Container, Row } from 'react-bootstrap'
import Loc from '../locations.json'
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

    this.sendEvent(e.target.value)
  }

  renderNotificationNotSupported() {
    return(
      <div className="row no-auth is-not-supported">
                <div className="card col-12">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12">
                                <p>O seu browser não suporta notificações :'(</p>
                                <p>Experimente usar o <a href="https://www.google.com/chrome/" target="_blank" rel="noopener noreferrer">Google Chrome</a> ou o <a href="https://www.mozilla.org/en-US/firefox/" target="_blank" rel="noopener noreferrer">Firefox</a>!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
  }

  handleNotifications() {
    let tokenFB = localStorage.getItem('tokenFB')

    if(tokenFB){
      let allNotifications = []
      for (let location of Loc.locations) {
        allNotifications = [...allNotifications, this.renderToggle(location)]
      }
      return allNotifications
    }

    return(
      <div className="row no-auth is-supported">
      <div className="card">
          <div className="card-body">
              <div className="row">
                  <div className="col-12 col-sm-5 col-md-6">
                      <p>Para receber notificações de novos comboios suprimidos, clique no
                          botão ao lado para iniciar a autorização.</p>
                  </div>
                  <div className="col-12 col-sm-7 col-md-6">
                      <button onClick={() => { this.startFirebase() }} type="button"
                              className="btn btn-outline-success btn-lg btn-block">Quero
                          receber notificações.
                      </button>
                  </div>
              </div>
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
  }

  bool(v) { return v === "false" || v === "null" || v === "NaN" || v === "undefined" || v === "0" ? false : !!v; }

  handleWhatToRender() {
    if(!window.PushManager || document.documentMode || /Edge/.test(navigator.userAgent)){
      return this.renderNotificationNotSupported();
    }

    return this.handleNotifications()
  }

  sendEvent(line) {
    if (window.ga) {
        if ("ga" in window) {
            var tracker = window.ga.getAll()[0];
            if (tracker)
                tracker.send("event", line, '', "click", '');
        }
    }
}

  render() {
    return (
      <div className="Notifications">
        <Container>
          <h1>Notificações</h1>
          {this.handleWhatToRender()}
        </Container>
      </div>
    )
  }
}

export default Notifications
