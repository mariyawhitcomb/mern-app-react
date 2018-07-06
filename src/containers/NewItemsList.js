import { connect } from 'react-redux'
import Items from '../Items'
import ShowItem from '../ShowItem'
import React from 'react'
import {removeItem} from '../actions/list'

const List = ({ items, onRemove}) => {
    return <Items>{
        items.map((eachItem, i)=>(
            <ShowItem
            key={i}
            {...eachItem}
            onClick={e=>{
                e.preventDefault()
                onRemove(i)
            }}
            />
        ))
    }</Items>;
  }
  const mapStateToProps = state => ({
    items: state.items
  })
  
  const mapDispatchToProps = dispatch => ({
    onRemove: id => dispatch(removeItem(id)),
  })

const NewItemsList = connect(mapStateToProps, mapDispatchToProps)(List)

export default NewItemsList