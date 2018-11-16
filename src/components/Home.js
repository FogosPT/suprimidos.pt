import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { connect } from 'react-redux'
import '../css/Home.css'
import Controls from './Controls'
import { app } from '../actions'
import Moment from 'react-moment';

import Typography from '@material-ui/core/Typography';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';


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
    if(props && props.app.last){
      this.setState({
        ...this.state,
        last: props.app.last,
      })
    }
    
  }

  render() {
    const homeClass = classNames('Home', {})
    console.log(this.props)
    console.log(this.state)
    if(this.state.last){
      console.log(this.state.last.timestamp)
    }
    
    return (
      <div className={homeClass}>
        <Typography component="h3" variant="display4" gutterBottom>
          Último comboio suprimido
        </Typography>
        {this.state.last ?
          <Moment unix>{this.state.last.timestamp}</Moment> : ''
        }
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Home)
