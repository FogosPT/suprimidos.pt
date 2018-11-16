import React, { Component } from 'react'
import { Container, Row, Col, Card, Table } from 'react-bootstrap'
import CountUp from 'react-countup';
import moment from 'moment'
import 'moment-timezone';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as contentActions from '../actions/contentActions'

class Home extends Component {

  componentWillMount() {
    this.props.actions.getLastSuppressed()
    this.props.actions.getLastSuppressedByLocation('cascais')
    this.props.actions.getLastSuppressedByLocation('vouga')
    this.props.actions.getLastSuppressedByLocation('leste')
    this.props.actions.getLastSuppressedByLocation('beiraAlta')
    this.props.actions.getLastSuppressedByLocation('beiraBaixa')
    this.props.actions.getLastSuppressedByLocation('oeste')
    this.props.actions.getLastSuppressedByLocation('sintra')
    this.props.actions.getLastSuppressedByLocation('minho')
    this.props.actions.getLastSuppressedByLocation('braga')
    this.props.actions.getLastSuppressedByLocation('guimaraes')
    this.props.actions.getLastSuppressedByLocation('douro')
    this.props.actions.getLastSuppressedByLocation('tua')
    this.props.actions.getLastSuppressedByLocation('norte')
    this.props.actions.getLastSuppressedByLocation('cintura')
    this.props.actions.getLastSuppressedByLocation('alentejo')
    this.props.actions.getLastSuppressedByLocation('evora')
    this.props.actions.getLastSuppressedByLocation('sul')
    this.props.actions.getLastSuppressedByLocation('algarve')
  }

  render() {
    let lastSupression = moment("20111031").fromNow().trim()
    let lastSupressionValue = parseInt(lastSupression)
    let lastSupressionExpression = lastSupression.match(/[^\d]*/g)
    let lastSupressionLabel = lastSupressionExpression.filter(word => word !== '')

    // this.props.fetchedLastSuppressedcascais && console.log('fetchedLastSuppressedcascais', this.props.fetchedLastSuppressedcascais)
    // this.props.fetchedLastSuppressedvouga && console.log('fetchedLastSuppressedvouga', this.props.fetchedLastSuppressedvouga)
    // this.props.fetchedLastSuppressedleste && console.log('fetchedLastSuppressedleste', this.props.fetchedLastSuppressedleste)
    // this.props.fetchedLastSuppressedbeiraAlta && console.log('fetchedLastSuppressedbeiraAlta', this.props.fetchedLastSuppressedbeiraAlta)
    // this.props.fetchedLastSuppressedbeiraBaixa && console.log('fetchedLastSuppressedbeiraBaixa', this.props.fetchedLastSuppressedbeiraBaixa)
    // this.props.fetchedLastSuppressedoeste && console.log('fetchedLastSuppressedoeste', this.props.fetchedLastSuppressedoeste)
    // this.props.fetchedLastSuppressedsintra && console.log('fetchedLastSuppressedsintra', this.props.fetchedLastSuppressedsintra)
    // this.props.fetchedLastSuppressedminho && console.log('fetchedLastSuppressedminho', this.props.fetchedLastSuppressedminho)
    // this.props.fetchedLastSuppressedbraga && console.log('fetchedLastSuppressedbraga', this.props.fetchedLastSuppressedbraga)
    // this.props.fetchedLastSuppressedguimaraes && console.log('fetchedLastSuppressedguimaraes', this.props.fetchedLastSuppressedguimaraes)
    // this.props.fetchedLastSuppresseddouro && console.log('fetchedLastSuppresseddouro', this.props.fetchedLastSuppresseddouro)
    // this.props.fetchedLastSuppressedtua && console.log('fetchedLastSuppressedtua', this.props.fetchedLastSuppressedtua)
    // this.props.fetchedLastSuppressednorte && console.log('fetchedLastSuppressednorte', this.props.fetchedLastSuppressednorte)
    // this.props.fetchedLastSuppressedcintura && console.log('fetchedLastSuppressedcintura', this.props.fetchedLastSuppressedcintura)
    // this.props.fetchedLastSuppressedalentejo && console.log('fetchedLastSuppressedalentejo', this.props.fetchedLastSuppressedalentejo)
    // this.props.fetchedLastSuppressedevora && console.log('fetchedLastSuppressedevora', this.props.fetchedLastSuppressedevora)
    // this.props.fetchedLastSuppressedsul && console.log('fetchedLastSuppressedsul', this.props.fetchedLastSuppressedsul)
    // this.props.fetchedLastSuppressedalgarve && console.log('fetchedLastSuppressedalgarve', this.props.fetchedLastSuppressedalgarve)
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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...contentActions }, dispatch)
  }
}

function mapStateToProps(state) {
  return {
    errorFetchLastSuppressed: state.contentReducer.errorFetchLastSuppressed,
    fetchingLastSuppressed: state.contentReducer.fetchingLastSuppressed,
    fetchedLastSuppressed: state.contentReducer.fetchedLastSuppressed,
    //Cascais
    fetchingLastSuppressedcascais: state.contentReducer.fetchingLastSuppressedIncascais,
    errorFetchLastSuppressedcascais: state.contentReducer.errorFetchLastSuppressedIncascais,
    fetchedLastSuppressedcascais: state.contentReducer.fetchedLastSuppressedIncascais,
    //vouga
    fetchingLastSuppressedvouga: state.contentReducer.fetchingLastSuppressedInvouga,
    errorFetchLastSuppressedvouga: state.contentReducer.errorFetchLastSuppressedInvouga,
    fetchedLastSuppressedvouga: state.contentReducer.fetchedLastSuppressedInvouga,
    //leste
    fetchingLastSuppressedleste: state.contentReducer.fetchingLastSuppressedInleste,
    errorFetchLastSuppressedleste: state.contentReducer.errorFetchLastSuppressedInleste,
    fetchedLastSuppressedleste: state.contentReducer.fetchedLastSuppressedInleste,
    //beiraAlta
    fetchingLastSuppressedbeiraAlta: state.contentReducer.fetchingLastSuppressedInbeiraAlta,
    errorFetchLastSuppressedbeiraAlta: state.contentReducer.errorFetchLastSuppressedInbeiraAlta,
    fetchedLastSuppressedbeiraAlta: state.contentReducer.fetchedLastSuppressedInbeiraAlta,
    //beiraBaixa
    fetchingLastSuppressedbeiraBaixa: state.contentReducer.fetchingLastSuppressedInbeiraBaixa,
    errorFetchLastSuppressedbeiraBaixa: state.contentReducer.errorFetchLastSuppressedInbeiraBaixa,
    fetchedLastSuppressedbeiraBaixa: state.contentReducer.fetchedLastSuppressedInbeiraBaixa,
    //oeste
    fetchingLastSuppressedoeste: state.contentReducer.fetchingLastSuppressedInoeste,
    errorFetchLastSuppressedoeste: state.contentReducer.errorFetchLastSuppressedInoeste,
    fetchedLastSuppressedoeste: state.contentReducer.fetchedLastSuppressedInoeste,
    //sintra
    fetchingLastSuppressedsintra: state.contentReducer.fetchingLastSuppressedInsintra,
    errorFetchLastSuppressedsintra: state.contentReducer.errorFetchLastSuppressedInsintra,
    fetchedLastSuppressedsintra: state.contentReducer.fetchedLastSuppressedInsintra,
    //minho
    fetchingLastSuppressedminho: state.contentReducer.fetchingLastSuppressedInminho,
    errorFetchLastSuppressedminho: state.contentReducer.errorFetchLastSuppressedInminho,
    fetchedLastSuppressedminho: state.contentReducer.fetchedLastSuppressedInminho,
    //braga
    fetchingLastSuppressedbraga: state.contentReducer.fetchingLastSuppressedInbraga,
    errorFetchLastSuppressedbraga: state.contentReducer.errorFetchLastSuppressedInbraga,
    fetchedLastSuppressedbraga: state.contentReducer.fetchedLastSuppressedInbraga,
    //guimaraes
    fetchingLastSuppressedguimaraes: state.contentReducer.fetchingLastSuppressedInguimaraes,
    errorFetchLastSuppressedguimaraes: state.contentReducer.errorFetchLastSuppressedInguimaraes,
    fetchedLastSuppressedguimaraes: state.contentReducer.fetchedLastSuppressedInguimaraes,
    //douro
    fetchingLastSuppresseddouro: state.contentReducer.fetchingLastSuppressedIndouro,
    errorFetchLastSuppresseddouro: state.contentReducer.errorFetchLastSuppressedIndouro,
    fetchedLastSuppresseddouro: state.contentReducer.fetchedLastSuppressedIndouro,
    //tua
    fetchingLastSuppressedtua: state.contentReducer.fetchingLastSuppressedIntua,
    errorFetchLastSuppressedtua: state.contentReducer.errorFetchLastSuppressedIntua,
    fetchedLastSuppressedtua: state.contentReducer.fetchedLastSuppressedIntua,
    //norte
    fetchingLastSuppressednorte: state.contentReducer.fetchingLastSuppressedInnorte,
    errorFetchLastSuppressednorte: state.contentReducer.errorFetchLastSuppressedInnorte,
    fetchedLastSuppressednorte: state.contentReducer.fetchedLastSuppressedInnorte,
    //cintura
    fetchingLastSuppressedcintura: state.contentReducer.fetchingLastSuppressedIncintura,
    errorFetchLastSuppressedcintura: state.contentReducer.errorFetchLastSuppressedIncintura,
    fetchedLastSuppressedcintura: state.contentReducer.fetchedLastSuppressedIncintura,
    //alentejo
    fetchingLastSuppressedalentejo: state.contentReducer.fetchingLastSuppressedInalentejo,
    errorFetchLastSuppressedalentejo: state.contentReducer.errorFetchLastSuppressedInalentejo,
    fetchedLastSuppressedalentejo: state.contentReducer.fetchedLastSuppressedInalentejo,
    //evora
    fetchingLastSuppressedevora: state.contentReducer.fetchingLastSuppressedInevora,
    errorFetchLastSuppressedevora: state.contentReducer.errorFetchLastSuppressedInevora,
    fetchedLastSuppressedevora: state.contentReducer.fetchedLastSuppressedInevora,
    //sul
    fetchingLastSuppressedsul: state.contentReducer.fetchingLastSuppressedInsul,
    errorFetchLastSuppressedsul: state.contentReducer.errorFetchLastSuppressedInsul,
    fetchedLastSuppressedsul: state.contentReducer.fetchedLastSuppressedInsul,
    //algarve
    fetchingLastSuppressedalgarve: state.contentReducer.fetchingLastSuppressedInalgarve,
    errorFetchLastSuppressedalgarve: state.contentReducer.errorFetchLastSuppressedInalgarve,
    fetchedLastSuppressedalgarve: state.contentReducer.fetchedLastSuppressedInalgarve,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
