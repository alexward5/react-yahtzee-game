import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    const disabled = this.props.score === undefined ? true : false;
    return (
      <tr className={`RuleRow RuleRow-${disabled ? 'active' : 'disabled'}`} onClick={this.props.doScore}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{disabled ? this.props.description : this.props.score}</td>
      </tr>
    )
  }
}

export default RuleRow;