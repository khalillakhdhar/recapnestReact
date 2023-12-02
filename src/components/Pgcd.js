import React, { Component } from 'react'

export default class Pgcd extends Component {
    constructor(props) {
        super(props);
        //this.props.titre="diviseur"; les props sont en lecture seule
        this.state = { a: 0, b: 0, pgcd: 0 };
    }
    diviseurs = () => {
    let v1=parseInt(this.state.a);
    let v2=parseInt(this.state.b);
    while (v1!==v2) {
        if (v1>v2) {
            v1=v1-v2;
        } else {
            v2=v2-v1;
        }
       

    }
    alert("le PGCD est : "+v1);
}
  render() {
    return (
      <div>
        <h1>PGCD ({this.props.titre})</h1>
        <form>
            <label htmlFor="a">a</label>
            <input type="text" id="a" name="a" value={this.state.a} onChange={e => this.setState({ a: e.target.value })} />
            <label htmlFor="b">b</label>
            <input type="text" id="b" name="b" value={this.state.b} onChange={e => this.setState({ b: e.target.value })} />
            <button type="button" onClick={this.diviseurs}>PGCD</button>
            </form>
      </div>
    )
  }
}
