import React, { Component } from 'react'
import { Container, Row, Col, Card, Table, Jumbotron } from 'react-bootstrap'
import CountUp from 'react-countup';
import moment from 'moment'
import 'moment-timezone'
import 'moment/locale/pt'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as suppressedActions from '../actions/suppressedActions'
import Loc from '../locations.json'

class Home extends Component {

  componentWillMount() {
    // API Calls
    this.props.actions.getLastSuppressed()
    for (let location of Loc.locations) {
      this.props.actions.getLastSuppressedByLocation(location.key)
    }
  }

  handleTimeToAnimate(date) {
    let lastSupression
    let numberValue = false
    let prefixString = 'há muito'
    let SufixString = 'tempo'
    if (this.props.allSuppressedContent.fetchedLastSuppressed) {
      lastSupression = moment.unix(this.props.allSuppressedContent.fetchedLastSuppressed.timestamp).fromNow()
      let prefixExp = /^\D*/
      let sufixExp = /\w*$/
      let numberValueExp = /\d+/g
      if (lastSupression.match(prefixExp)[0]) {
        prefixString = lastSupression.match(prefixExp)[0]
      }
      if (lastSupression.match(sufixExp)[0]) {
        SufixString = lastSupression.match(sufixExp)[0]
      }
      if (lastSupression.match(numberValueExp) && lastSupression.match(numberValueExp)[0]) {
        numberValue = parseInt(lastSupression.match(numberValueExp)[0])
      }
      // If the first string has the substring we just render the prefix
      if (prefixString.includes(SufixString)) {
        SufixString = ''
      }
      // console.log('SufixString', SufixString)
      // console.log('prefixString', prefixString)
      // console.log('numberValue', numberValue)
    }

    return { numberValue, prefixString, SufixString: ` ${SufixString}` }
  }

  handleLines() {
    let allLines = []
    for (let location of Loc.locations) {
      if (this.props.allSuppressedContent[`fetchedLastSuppressedIn${location.key}`]) {
        allLines = [...allLines, this.renderLine(location, this.props.allSuppressedContent[`fetchedLastSuppressedIn${location.key}`])]
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
    moment.locale('pt')
    let { numberValue, prefixString, SufixString } = this.handleTimeToAnimate()
    return (
      <div className="Home">
        <Jumbotron fluid>
          <Container>
            <h1 className="text-center">O último comboio suprimido foi {prefixString}
              {numberValue && <CountUp
                start={0}
                end={numberValue}
                duration={3}
                delay={0.5}
              />}
              {SufixString}
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
    actions: bindActionCreators({ ...suppressedActions }, dispatch)
  }
}

function mapStateToProps(state) {
  return {
    allSuppressedContent: state.suppressedReducer,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
