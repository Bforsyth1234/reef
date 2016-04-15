import React from 'react';

export default class App extends React.Component {


  var Add = React.createClass({
  render: function () {
    var sum = this.props.x + this.props.y;
    return React.DOM.span({}, sum);
  }
});