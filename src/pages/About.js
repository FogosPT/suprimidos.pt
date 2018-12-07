import React, { Component } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import moment from 'moment'
import 'moment-timezone';

class About extends Component {

  render() {
    moment.locale('pt')

    return (
      <div className="Sobre">
        <Container>
          <Row>
            <Col xs={12}>
              <Card>
                <Card.Body>
                  <h1>Sobre</h1>
                  <p>O Suprimidos.pt é um serviço que possibilita o acesso À informação atualizada sobre comboios suprimidos e atrasados nas várias linhas ferroviárias do país. O Suprimidos.pt nasce pelas mãos da mesma equipa que desenvolveu o <a href="https://fogos.pt" target="_blank" rel="noopener noreferrer">Fogos.pt</a></p>
                  <p>O projeto é de código aberto, pelo que tu também podes contribuir!</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Card>
                <Card.Body>
                  <p>Informações recolhidas do site da <a href="https://www.infraestruturasdeportugal.pt/negocios-e-servicos/horarios" target="_blank" rel="noopener noreferrer">Infraestruturas de Portugal</a>.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Card>
                <Card.Body>
                  <h2>Agradecimentos</h2>

                  <p>Guilherme Cabral <a href="https://twitter.com/theoneguilherme" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></p>
                  <p>Ricardo Pimentel <a href="https://twitter.com/rcdpimentel" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></p>
                  <p>Zé Caetano</p>
                  <p>Jorge Saco <a href="https://twitter.com/jandresaco" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default About
