import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as contentActions from '../actions/contentActions'
class Delays extends Component {

  componentWillMount() {
    this.props.actions.getContent()
  }

  render() {
    this.props.fetchedContent && console.log(this.props.fetchedContent)

    return (
      <div className="Delays">
        {this.props.fetchingContent && <p>Loading</p>}
        {this.props.errorFetchContent && <p>Error</p>}
        {this.props.fetchedContent && <p>content here, check console.log</p>}
        <p>Delays</p>
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
    errorFetchContent: state.contentReducer.errorFetchContent,
    fetchingContent: state.contentReducer.fetchingContent,
    fetchedContent: state.contentReducer.fetchedContent,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Delays)
