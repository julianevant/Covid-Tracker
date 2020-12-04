import React, {useEffect} from 'react'
import axios from 'axios';

const Global = () => {
    useEffect(() => {
       axios
       .get("https://covid19.mathdro.id/api")
       .then((response)=>({}))
    }, [])
    return (
        <div>
            <h1>Global</h1>
        </div>
    )
}

export default Global;