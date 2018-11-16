import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { connect } from 'react-redux'
//import Controls from './Controls'
import Typography from '@material-ui/core/Typography'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'
import { app } from '../actions'
import '../css/Home.css'
//import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';


class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      last: undefined,
    }
  }

  componentDidMount() {
    this.props.dispatch(app.getLast())
    this.props.dispatch(app.getOeste())
    this.getData(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.getData(nextProps)
    }
  }

  getData(props) {
    if (props && props.app.last) {
      this.setState({
        ...this.state,
        last: props.app.last,
      })
    }
  }

  render() {
    const homeClass = classNames('Home', {})

    return (
      <div className={homeClass}>
        <Typography component="h3" variant="display4" gutterBottom>
          Último comboio suprimido
        </Typography>
        {this.state.last ?
          <Moment unix>{this.state.last.timestamp}</Moment> : ''
        }
        <Link to="/notificacao">Home</Link>
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Home)
