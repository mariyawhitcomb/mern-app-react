import React, { Component } from 'react'
import { createNewItem } from './actions/list';

export default class NewItem extends Component {
  constructor(){
    super()
    this.onClick=this.onClick.bind(this)
  }
  onClick(e){
    this.props.addItem(e)
    e.preventDefault()
    console.log(e.target)
    // this.props.dispatch(createNewItem(e.target.value));
    this.props.history.push(`/items`)
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <form action="/items" method="POST">
          <input 
          onChange={this.props.getValue}
           type="text" placeholder="Add new item..."/>
          <input onClick={this.onClick} type="button" value="Add"/>
        </form>
      </div>
    )
  }
}
