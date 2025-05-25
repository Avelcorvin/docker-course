import React, { useCallback, useEffect, useState } from 'react'
import { Input, CheckBox, Email, Password } from '../html/input.tsx';
import './style.css'
class User {
    name: string;
    email: string;
    password: string;
    constructor({ name, email, password }) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

export const Registration = () => {

    return (<div className='registration'>
        <Form />
    </div>

    )
}


const Form = () => {
    const [name, setname] = useState(null);
    const [email, setemail] = useState(null);
    const [password, setpassword] = useState(null);
    const [checkbox, setCheckbox] = useState(null)
    useEffect(() => {
        console.log(name, email, password)
    }, [name, email, password]);
    const onSubmit = async () => {
        const user = new User({
            name,
            email,
            password
        })
        await fetch('/todo', {
            method: 'post',
            body: JSON.stringify(user)
        })
    }
    return (
        <form>
            <Input handler={setemail} Child={Email} type='checkbox' />
            <Input handler={setpassword} Child={Password} type='checkbox' />
            <Input handler={setCheckbox} Child={CheckBox} type='checkbox' />
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}