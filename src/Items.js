import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import store from './store'
import {connect} from 'react-redux'

const Items = ({children={}})=>(
  children.length > 0 ?
    <div>
      <ul>
      {children}
      </ul>
  </div> :
  <p>Nothing to buy</p>
)
  
          
      
export default Items