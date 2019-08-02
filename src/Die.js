import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  toggleDie = () => {
    this.props.handleClick(this.props.idx);
  }

  render() {
    let classes = `Die ${this.props.locked ? 'Die-locked' : ''}`;
    if (this.props.rolling && !this.props.locked) {
      classes += ' Die-rolling';
    }

    const diceIcons = [
      <i className="fas fa-dice-one"></i>,
      <i className="fas fa-dice-two"></i>,
      <i className="fas fa-dice-three"></i>,
      <i className="fas fa-dice-four"></i>,
      <i className="fas fa-dice-five"></i>,
      <i className="fas fa-dice-six"></i>,
    ];

    return (
      <button
        className={classes}
        onClick={this.toggleDie}
      >
      {diceIcons[this.props.val - 1]}
      </button>
    );
  }
}

export default Die;
