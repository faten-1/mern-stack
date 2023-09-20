import React, { useState } from 'react'
import AddProduct from '../components/AddProduct'
import DisplayProducts from '../components/DisplayProducts'

const Main = () => {
    const [refreshState, setRefreshState] = useState(false)

    const refresh = () => {
        setRefreshState(!refreshState)
    }
    return (
        <div>
            <AddProduct refresh={refresh}/>
            <DisplayProducts refreshState = {refreshState}/>
        </div>
    )
}

export default Main