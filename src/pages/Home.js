import React, { Component } from 'react'
import { Container, Row, Col, Card, Table } from 'react-bootstrap'
import CountUp from 'react-countup';
import moment from 'moment'
import 'moment-timezone';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as contentActions from '../actions/contentActions'

const LOCATIONS = ['sintra','algarve', 'beiraAlta',
                   'cascais','vouga', 'leste',
                   'beiraBaixa', 'oeste', 'minho',
                   'braga', 'guimaraes', 'douro',
                   'tua', 'norte', 'cintura',
                   'alentejo', 'evora', 'sul']
class Home extends Component {

  componentWillMount() {
    this.props.actions.getLastSuppressed()
    for(let location of LOCATIONS){
      this.props.actions.getLastSuppressedByLocation(location)
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

  render() {

    // available lines:
    // 'sintra',
    // 'minho',
    // 'braga',
    // 'oeste',
    // 'beiraAlta',
    // 'cascais',
    // 'tomar',
    // 'norte',
    // 'douro',
    // 'guimaraes',
    // 'beiraBaixa',
    // 'cintura',
    // 'algarve',
    // 'casaBranca',
    // 'sado',
    // 'evora',
    // 'aveiro',
    // 'fertagus',
    // 'especial',
    // 'soporcel',
    // 'carga',
    // 'areia',
    // 'cimento',
    // 'madeira',
    // 'carvao',

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

    let sintraLast = 0
    if (this.props.fetchedLastSuppressedsintra) {
      sintraLast = [this.props.fetchedLastSuppressedsintra.timestamp]
      sintraLast.push(this.props.fetchedLastSuppressedsintra.line)
      sintraLast.push(this.props.fetchedLastSuppressedsintra.type)
      sintraLast.push(this.props.fetchedLastSuppressedsintra.vendor)
    }

    let algarveLast = 0
    if (this.props.fetchedLastSuppressedalgarve) {
      algarveLast = [this.props.fetchedLastSuppressedalgarve.timestamp]
      algarveLast.push(this.props.fetchedLastSuppressedalgarve.line)
      algarveLast.push(this.props.fetchedLastSuppressedalgarve.type)
      algarveLast.push(this.props.fetchedLastSuppressedalgarve.vendor)
    }

    let beiraAltaLast = 0
    if (this.props.fetchedLastSuppressedbeiraAlta) {
      beiraAltaLast = [this.props.fetchedLastSuppressedbeiraAlta.timestamp]
      beiraAltaLast.push(this.props.fetchedLastSuppressedbeiraAlta.line)
      beiraAltaLast.push(this.props.fetchedLastSuppressedbeiraAlta.type)
      beiraAltaLast.push(this.props.fetchedLastSuppressedbeiraAlta.vendor)
    }

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
                        <th>Linha</th>
                        <th>Tipo</th>
                        <th>Operador</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Sintra</td>
                        <td>{moment.unix(sintraLast[0]).fromNow()}</td>
                        <td>{sintraLast[1]}</td>
                        <td>{sintraLast[2]}</td>
                        <td>{sintraLast[3]}</td>
                        <td>{sintraLast[4]}</td>
                      </tr>
                      <tr>
                        <td>Algarve</td>
                        <td>{moment.unix(algarveLast[0]).fromNow()}</td>
                        <td>{algarveLast[1]}</td>
                        <td>{algarveLast[2]}</td>
                        <td>{algarveLast[3]}</td>
                        <td>{algarveLast[4]}</td>
                      </tr>
                      <tr>
                        <td>Beira Alta</td>
                        <td>{moment.unix(beiraAltaLast[0]).fromNow()}</td>
                        <td>{beiraAltaLast[1]}</td>
                        <td>{beiraAltaLast[2]}</td>
                        <td>{beiraAltaLast[3]}</td>
                        <td>{beiraAltaLast[4]}</td>
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
