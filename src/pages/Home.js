import React, { Component } from 'react'
import { Container, Row, Col, Card, Table } from 'react-bootstrap'
import CountUp from 'react-countup';
import moment from 'moment'
import 'moment-timezone';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as contentActions from '../actions/contentActions'
import Loc from '../locations.json'

class Home extends Component {

  componentWillMount() {
    this.props.actions.getLastSuppressed()
    for (let location of Loc.locations) {
      this.props.actions.getLastSuppressedByLocation(location.key)
    }
  }

  returnDateFormated(date) {
    let lastSupression
    let lastSupressionValue = 0
    let lastSupressionExpression
    let lastSupressionLabel
    lastSupression = moment.unix(date).fromNow()
    lastSupressionValue = parseInt(lastSupression)
    lastSupressionExpression = lastSupression.match(/[^\d]*/g)
    lastSupressionLabel = lastSupressionExpression.filter(word => word !== '')

    return [lastSupressionValue, lastSupressionLabel];
  }

  handleLines() {
    let allLines = []
    for (let location of Loc.locations) {
      if (this.props.allContent[`fetchedLastSuppressedIn${location.key}`]) {
        allLines = [...allLines, this.renderLine(location, this.props.allContent[`fetchedLastSuppressedIn${location.key}`])]
      }
    }
    return allLines
  }

  renderLine(location, content) {
    return (
      <tr key={location.key}>
        <td>{location.value}</td>
        <td>{moment.unix(content.timestamp).fromNow()}</td>
        <td>{content.type}</td>
        <td>{content.vendor}</td>
      </tr>
    )
  }

  render() {

    let lastSupression
    let lastSupressionValue = 0
    let lastSupressionExpression
    let lastSupressionLabel
    if (this.props.fetchedLastSuppressed) {
      lastSupression = moment.unix(this.props.fetchedLastSuppressed.timestamp).fromNow()
      lastSupressionValue = parseInt(lastSupression)
      lastSupressionExpression = lastSupression.match(/[^\d]*/g)
      lastSupressionLabel = lastSupressionExpression.filter(word => word !== '')
    }

    return (
      <div className="Home">
        <Container>
          <Row>
            <Col xs={12}>
              <Card>
                <Card.Body className="text-center">
                  <h1>O último comboio suprimido foi há &nbsp;
                    <CountUp
                      start={0}
                      end={lastSupressionValue}
                      duration={3}
                      delay={0.5}
                    />
                    {lastSupressionLabel}
                  </h1>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Linha</th>
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
    actions: bindActionCreators({ ...contentActions }, dispatch)
  }
}

function mapStateToProps(state) {
  return {

    allContent: state.contentReducer,

    errorFetchLastSuppressed: state.contentReducer.errorFetchLastSuppressed,
    fetchingLastSuppressed: state.contentReducer.fetchingLastSuppressed,
    fetchedLastSuppressed: state.contentReducer.fetchedLastSuppressed,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
