import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import NewItem from './NewItem'
import Items from './Items';
import ShowItem from './ShowItem';
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state={
      newItem: '',
      items:[]
    }
  }
  componentDidMount = () => {
    let origin
    if(window.location.origin==='http://localhost:4000'){
      origin = 'http://localhost:4001'
    }else{
      origin = 'https://cryptic-meadow-80214.herokuapp.com'
    }
    axios.get(`${origin}/items`)
    .then(results=>{
      this.setState({items: results.data})
      console.log(results.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  
  addItem=(e)=>{
    e.preventDefault()
    const data = this.state.newItem
    let origin
    if(window.location.origin==='http://localhost:4000'){
      origin = 'http://localhost:4001'
    }else{
      origin = 'https://cryptic-meadow-80214.herokuapp.com'
    }
    axios({
      method: 'post',
      url: `${origin}/items`,
      data: {
        data
      }
    })
   .then(()=>{
      axios.get(`${origin}/items`)
    .then(results=>{
      this.setState({items: results.data})
      console.log(results.data)
    })
    .catch((err) => {
      console.log(err)
    })
    })
  }
  
  getValue=(e)=>{
    e.preventDefault()
    const value = e.target.value
    this.setState({newItem: value})
    console.log(this.state.newItem)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-title">
          <Link to='/items'>Shopping List</Link>
          <Link to='/'>Add new item</Link>
          </div>
        </header>
        <Route
          path='/'
          render ={(routerParams)=>{
            return <NewItem
            addItem={this.addItem}
            getValue={this.getValue}
            {...routerParams}
          />
        }}       
         />
        <Route
                path='/items'
                exact
                render ={(routerParams)=>{
                return <Items
                items={this.state.items}
                {...routerParams}
              />
            }}
          />
       <Route
              path='/items/:id'
              render ={(routerParams)=>{
              return <ShowItem
              items={this.state.items} 
              {...routerParams}
            />
          }}
              />
      </div>
    );
  }
}

export default App;
