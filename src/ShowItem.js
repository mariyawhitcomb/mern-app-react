import React from 'react'

const ShowItem =({name='', onClick = () => {}})=>(
  <div>
    <ul>
        <li className='list'>
            {name}
            <form onSubmit={onClick} action={'/'} method="DELETE">
                <button  type="submit">X</button>
            </form>
        </li>
    </ul>
        
      </div>  
)

      
export default ShowItem