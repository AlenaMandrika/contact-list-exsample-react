import React, { Component } from 'react'

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsElapsed: 0,

    }
    this.tick = this.tick.bind(this)
  }

  componentDidMount () {
    this.timer = setInterval(
      this.tick, 1000
    )
  }
  componentWillUnmount () {
    clearInterval(this.timer)
  }

  tick () {
    this.setState({
      secondsElapsed: this.state.secondsElapsed + 1
    })
  }

  render () {
    return (
      <div><h2>Минуло {this.state.secondsElapsed} секунд</h2></div>
    )
  }
}

export default Timer
