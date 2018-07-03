import React, { Component } from 'react'

export default class NewItem extends Component {
  constructor(){
    super()
    this.onClick=this.onClick.bind(this)
  }
  onClick(e){
    this.props.addItem(e)
    this.props.history.push(`/items`)
  }
  render() {
    return (
      <div>
        <form action="/items" method="POST">
          <input onChange={this.props.getValue} type="text" placeholder="Add new item..."/>

          <input onClick={this.onClick} type="button" value="Add"/>
        </form>
      </div>
    )
  }
}
