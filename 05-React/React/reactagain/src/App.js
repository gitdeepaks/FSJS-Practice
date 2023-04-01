import React, { useState } from 'react'
import Card from './card'
import Axios from 'axios';

const App = () => {

    const [deatails, SetDatiles] = useState({})

    const fetchDetails = async () => {
        const { data } = await Axios.get('https://randomuser.me/api')
    }

    return (
        <>
            <div>App</div>
            <Card myname="deepak" list={list} />
        </>
    )
}

export default App