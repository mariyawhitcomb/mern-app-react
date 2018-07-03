import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Items extends Component {
    
    
    
  render() {
      console.log(this.props)
      if(this.props.items){
            this.items = this.props.items.map(item=>{
          return (
        <li key={item._id}>
            <Link to={`/items/${item._id}`}>{item.name}</Link>
        </li>
     
    )
      }) 
      }
    
      return (
          <div>
              <ul>
              {this.props.items && this.items}
              </ul>
         </div>
        )
  }
}
