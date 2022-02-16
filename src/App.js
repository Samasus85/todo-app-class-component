import React, { Component } from 'react'
import List from './List'
class App extends Component {
  state = {
    items: [],
    text: ""
  }
  changeHandler = (e) => {
    this.setState({ text: e.target.value })
  }
  addHandler = () => {
    if (this.state.text !== "") {
      const items = [...this.state.items, this.state.text];
      this.setState({ items: items, text: "" });
    }
  }
  deleteHandler = (id) => {
    const prevItems = [...this.state.items]
    const items = prevItems.filter((element, i) => {
      return i !== id
    })
    this.setState({ items: items });
  }
  render() {
    return (
      <div className="row">
        <h2> Today's Plan </h2>
        <div>
          <div>
            <input type="text" placeholder="Write Plan Here" value={this.state.text} onChange={this.changeHandler} />
            <button className="btn" onClick={this.addHandler}>Add</button>
          </div>
          <div>
            <ol>
              {
                this.state.items.map((value, i) => {
                  return <List key={i} id={i} value={value} sendData={this.deleteHandler} />
                })
              }
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default App;