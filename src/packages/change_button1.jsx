import React, { Component } from 'react'
import './change_button.css'

class ChangeButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      btnTxt: 'A',
    }
  }

  render() {
    const { btnTxt } = this.state
    return (
      <div
        className="button-container"
        onClick={() => {
          this.setState({ btnTxt: btnTxt === 'A' ? 'B' : 'A' })
        }}
      >
        <span>{btnTxt}1.0</span>
      </div>
    )
  }
}

export default ChangeButton
