import React, { Children, useCallback, useEffect, useState } from 'react'


interface Input {
    handler: (value: any) => any;
    type?: "checkbox" | "submit" | "email" | "password";
    Child: any
}

export const Input = ({ handler, Child }: Input) => {
    const [value, setValue] = useState('');
    const cb = (EO) => { setValue(EO.currentTarget.value) };
    useEffect(() => {
        handler && handler(value)
    }, [value])

    return <Child cb={cb} />
}

export const CheckBox = ({ cb }) => {
    return (
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" onChange={cb}></input>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
    )
}
export const Password = ({ cb }) => {
    return (
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" onChange={cb}></input>
        </div>
    )
}

export const Email = ({ cb }) => {
    return (
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={cb}></input>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
    )
}

