import React, { Component } from "react";

export default class DetailPage extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
  }

  render() {
    return <div>DetailPage</div>;
  }
}
