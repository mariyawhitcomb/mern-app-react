import React, { Component } from 'react'

export default class ShowItem extends Component {
    componentDidMount() {
        console.log(this.props.match.params.id)
    }
    
    
  render() {
    this.item = this.props.items.filter(item=>item._id === this.props.match.params.id)
    return (
      <div>
        {this.item[0].name}
      </div>
    )
  }
}
