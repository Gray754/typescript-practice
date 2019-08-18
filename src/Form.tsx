import React, { useState } from 'react';

interface props{
    name: string
}

const Form=(Props:props)=>{
    const [name, setName] = useState('')

    return(
        <>
            <p>Hi, my name is {name}.</p>
            <input name='name' value={name} onChange={e=>{setName(e.target.value)}}/>
        </>
    )
}

export default Form