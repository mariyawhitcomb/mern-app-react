import React, { Component } from 'react'

export default class ShowItem extends Component {
    componentDidMount() {
        console.log(this.props.match.params.id)
        this.props.items.itemId = this.props.match.params.id
    }
    
    
  render() {
    this.item = this.props.items.filter(item=>item._id === this.props.match.params.id)
    return (
      <div>
          <ul>
        <li>
        {this.item[0].name}
        </li>
        </ul>
        <form action={`/items/${this.props.match.params.id}`} method="DELETE">
            <input key={this.props.match.params.id} onClick={this.props.deleteItem} type="button" value="Delete"/>
        </form>
      </div>
    )
  }
}
