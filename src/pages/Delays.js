import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as contentActions from '../actions/contentActions'
class Delays extends Component {

  componentWillMount() {
    this.props.actions.getLastSuppressed()
  }

  render() {
    this.props.fetchedLastSuppressed && console.log(this.props.fetchedLastSuppressed)

    return (
      <div className="Delays">
        {this.props.fetchingLastSuppressed && <p>Loading</p>}
        {this.props.errorFetchLastSuppressed && <p>Error</p>}
        {this.props.fetchedLastSuppressed && <p>content here, check console.log</p>}
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
    errorFetchLastSuppressed: state.contentReducer.errorFetchLastSuppressed,
    fetchingLastSuppressed: state.contentReducer.fetchingLastSuppressed,
    fetchedLastSuppressed: state.contentReducer.fetchedLastSuppressed,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Delays)
