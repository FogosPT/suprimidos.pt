import React, { Component } from 'react'
import { Container, Row, Col, Jumbotron, Card } from 'react-bootstrap'
import moment from 'moment'
import 'moment-timezone'
import 'moment/locale/pt'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as suppressedActions from '../actions/suppressedActions'
//import Loc from '../locations.json'

class Supressed extends Component {

  componentWillMount() {
    this.props.actions.getAllSuppressedByLocation(this.props.match.params.location)
  }

  componentWillUnmount() {
    this.props.actions.cleanAllSupressedByLocation()
  }

  makeRows(content) {
    let rows = []
    let cols = []
    content.forEach((item, idx) => {
      cols = [...cols, item]
      if (cols.length % 3 === 0) {
        rows = [...rows, cols]
        cols = []
      } else if ((content.length - 1) === idx) {
        rows = [...rows, cols]
        cols = []
      }
    })
    return rows
  }

  renderSupressedInfo() {
    let supressed = this.props.fetchedAllSupressedByLocation
    if (supressed && supressed.length > 0) {
      let rows = this.makeRows(supressed)
      return rows.map((cols, idx) => {
        return (
          <Row key={idx}>
            {
              cols.map((train, idx) => {
                return (
                  <Col key={idx} md="4">
                    <Card key={idx}>
                      <Card.Body>
                        <h4>{train.begin} <span className="text-small">({train.startTime})</span></h4>
                        <h4>{train.end} <span className="text-small">({train.endTime})</span></h4>
                        <p>{train.line} - {train.type} - {train.vendor}</p>
                        <p>{moment.unix(train.timestamp).fromNow()}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              })
            }
          </Row>
        )
      })
    }
  }

  render() {
    const locationUri = this.props.match
    
    return (
      <div className="Home">
        <Jumbotron fluid>
          <Container>
          <button className="btn btn-sm" onClick={this.props.history.goBack}><i className="fas fa-arrow-alt-circle-left"></i> Voltar</button><h1 className="text-center">Comboios suprimidos para: {locationUri.params.location}</h1>
          </Container>
        </Jumbotron>
        <Container>
          {this.renderSupressedInfo()}
        </Container>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...suppressedActions }, dispatch)
  }
}

function mapStateToProps(state) {
  return {
    fetchingAllSupressedByLocation: state.suppressedReducer.fetchingAllSupressedByLocation,
    errorFetchAllSupressedByLocation: state.suppressedReducer.errorFetchAllSupressedByLocation,
    fetchedAllSupressedByLocation: state.suppressedReducer.fetchedAllSupressedByLocation,
    locationAllSupressed: state.suppressedReducer.locationAllSupressed
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Supressed)
