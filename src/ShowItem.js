import React from 'react'

const ShowItem =({name='', quantity=1, onClick = () => {}})=>(
  <div>
    <ul>
        <li>
            {name}
            {quantity}
        <form onSubmit={onClick} action={'/'} method="DELETE">
            <button  type="submit">Delete</button>
        </form>
        </li>
    </ul>
        
      </div>  
)

      
export default ShowItem