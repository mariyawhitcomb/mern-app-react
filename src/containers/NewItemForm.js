import { connect } from 'react-redux'
import NewItem from '../NewItem'

const wrapperFunction = connect()
const NewItemForm = wrapperFunction(NewItem)

// the above is often shortened to:
// const NewOrderForm = connect()(OrderForm)

export default NewItemForm