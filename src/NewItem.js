import React, { Component } from 'react'
import { createNewItem } from './actions/list';

export default class NewItem extends Component {
  constructor(props){
    super(props)
    this.onSubmit=this.onSubmit.bind(this)
  }
  onSubmit(e){
    e.preventDefault()
    console.log(e.target[0].value)
    this.props.dispatch(createNewItem(e.target[0].value));
    e.target[0].value = "";

  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} action="/" method="POST">
          <input 
           type="text" placeholder="Add new item..."/>
          <button  type="submit">Add</button>
        </form>
      </div>
    )
  }
}
