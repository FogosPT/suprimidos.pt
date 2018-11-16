import React, { Component } from 'react'
import { Container, Row, Col, Card, Table } from 'react-bootstrap'
import CountUp from 'react-countup';
import moment from 'moment'
import 'moment-timezone';

class Home extends Component {
  render() {
    let lastSupression = moment("20111031").fromNow().trim()
    let lastSupressionValue = parseInt(lastSupression)
    let lastSupressionExpression = lastSupression.match(/[^\d]*/g)
    let lastSupressionLabel = lastSupressionExpression.filter(word => word !== '')

    return (
      <div className="Home">
        <Container>
          <Row>
            <Col xs={12}>
              <Card>
                <Card.Body className="text-center">
                  <h1>O último comboio suprimido foi à
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
                        <th>#</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                      </tr>
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

export default Home
