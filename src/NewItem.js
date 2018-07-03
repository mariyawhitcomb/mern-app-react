import React, { Component } from 'react'

export default class NewItem extends Component {
  render() {
    return (
      <div>
        <form action="/items" method="POST">
          <input onChange={this.props.getValue} type="text" placeholder="Add new item..."/>
          <input onClick={this.props.addItem} type="button" value="Add"/>
        </form>
      </div>
    )
  }
}
