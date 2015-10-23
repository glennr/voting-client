import React from 'react'
import ReactDOM from 'react-dom'
import Voting from './components/Voting'
import {
  Range
}
from 'immutable'

const pair = ['Trainspotting', '28 Days Later']

var Hello = React.createClass({
  // mixins: [React.addons.PureRenderMixin],
  renderCount: 0,
  getInitialState: function() {
    return {
      values: [0]
    };
  },
  handleClick: function(i) {
    this.setState({
      values: Range(1, 5000, 1).toList()
    });
  },
  render: function() {
    this.renderCount += 1;
    var self = this;
    var rows = this.state.values.map(function(value, i) {
      return <Voting pair={[i, i+1]}></Voting>
    });
    return (
      <div>
            <h3>Performance Test Without PureRenderMixin</h3>
            <button onClick={self.handleClick}>GO</button>
            <p>Parent renderCount:{this.renderCount}</p>
            {rows}
            </div>
    );
  }
});

React.render(<Hello />, document.body);
