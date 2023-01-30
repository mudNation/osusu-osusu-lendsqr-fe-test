import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Userstemp = () => {
    const { id } = useParams(); 
    const [message, setMessage] = useState("")
    useEffect( () => {
        if(id){
            setMessage(`Trying to get ${id}`)
        }else{
            setMessage(`No message`)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <div>
            {message}
        </div>
    )
}


export default Userstemp; 