import React, { Component } from 'react'

export default class ShowItem extends Component {
    constructor(){
        super()
        this.onClick=this.onClick.bind(this)
    }
    componentDidMount() {
        console.log(this.props.match.params.id)
        this.props.items.itemId = this.props.match.params.id
    }
    onClick(e){
        this.props.deleteItem(e)
        this.props.history.push(`/items`)
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
            <input key={this.props.match.params.id} onClick={this.onClick} type="button" value="Delete"/>
        </form>
      </div>
    )
  }
}
