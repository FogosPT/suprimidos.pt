import React, { Component } from 'react'
import { Container, Row, Col, Card, Table, Jumbotron } from 'react-bootstrap'
import CountUp from 'react-countup';
import moment from 'moment'
import 'moment-timezone';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as delayedActions from '../actions/delayedActions'
import Loc from '../locations.json'

class Delays extends Component {

  componentWillMount() {
    // API Calls
    this.props.actions.getLastDelayed()
    for (let location of Loc.locations) {
      this.props.actions.getLastDelayedByLocation(location.key)
    }
  }

  returnDateFormated(date) {
    let lastDelay
    let lastDelayValue = 0
    let lastDelayExpression
    let lastDelayLabel
    lastDelay = moment.unix(date).fromNow()
    lastDelayValue = parseInt(lastDelay)
    lastDelayExpression = lastDelay.match(/[^\d]*/g)
    lastDelayLabel = lastDelayExpression.filter(word => word !== '')

    return [lastDelayValue, lastDelayLabel];
  }

  handleLines() {
    let allLines = []
    for (let location of Loc.locations) {
      if (this.props.allDelayedContent[`fetchedLastDelayedIn${location.key}`]) {
        allLines = [...allLines, this.renderLine(location, this.props.allDelayedContent[`fetchedLastDelayedIn${location.key}`])]
      }
    }
    return allLines
  }

  renderLine(location, content) {
    return (
      <tr key={location.key}>
        <td>{location.value}</td>
        <td>{content.max} min</td>
        <td>{content.min} min</td>
        <td>{content.totalDelay} min</td>
        <td>{moment.unix(content.timestamp).fromNow()}</td>
        <td>{content.type}</td>
        <td>{content.vendor}</td>
      </tr>
    )
  }

  render() {

    let lastDelay
    let lastDelayValue = 0
    let lastDelayExpression
    let lastDelayLabel
    if (this.props.allDelayedContent.fetchedLastDelayed) {
      lastDelay = moment.unix(this.props.allDelayedContent.fetchedLastDelayed.timestamp).fromNow()
      lastDelayValue = parseInt(lastDelay)
      lastDelayExpression = lastDelay.match(/[^\d]*/g)
      lastDelayLabel = lastDelayExpression.filter(word => word !== '')
    }

    return (
      <div className="Home">
        <Jumbotron fluid>
          <Container>
            <h1 className="text-center">O último comboio atrasado foi há &nbsp;
              <CountUp
                start={0}
                end={lastDelayValue}
                duration={3}
                delay={0.5}
              />
              {lastDelayLabel}
            </h1>
          </Container>
        </Jumbotron>
        <Container>
          <Row>
            <Col xs={12}>
              <Card>
                <Card.Body className="text-center">
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Linha</th>
                        <th>Maior</th>
                        <th>Menor</th>
                        <th>Total</th>
                        <th>Último</th>
                        <th>Tipo</th>
                        <th>Operador</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.handleLines()}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...delayedActions }, dispatch)
  }
}

function mapStateToProps(state) {
  return {
    allDelayedContent: state.delayedReducer,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Delays)
