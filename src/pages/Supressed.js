import React, { Component } from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
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

  render() {
    const locationUri = this.props.match
    console.log(this.props.fetchedAllSupressedByLocation)
    return (
      <div className="Home">
        <Jumbotron fluid>
          <Container>
            <h1 className="text-center">Comboios suprimidos para: {locationUri.params.location}</h1>
          </Container>
        </Jumbotron>
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
