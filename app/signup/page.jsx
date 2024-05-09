'use client';

import Signup from '@/components/Signup';
import { validateEmail, validateName, validatePassword, } from '@/utilities/validator';
import React from 'react';
import { useState } from 'react';
import axios from '../../utilities/axiosInstance';
import { replaceItems } from '@/utilities/replaceItems';

const page = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const [classList, setclassList] = useState([ 'bg-blue-50', 'border outline-1', 'outline-blue-400', 'border-gray-300', 'text-gray-900', 'text-sm', 'rounded-lg', 'block', 'w-full', 'p-2.5']);
    const [classList2, setclassList2] = useState([ 'bg-blue-50', 'border outline-1', 'outline-blue-400', 'border-gray-300', 'text-gray-900', 'text-sm', 'rounded-lg', 'block', 'w-full', 'p-2.5']);
    const [classList3, setclassList3] = useState([ 'bg-blue-50', 'border outline-1', 'outline-blue-400', 'border-gray-300', 'text-gray-900', 'text-sm', 'rounded-lg', 'block', 'w-full', 'p-2.5']);

    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState('');

    const [inValid, setInvalid] = useState({
        email: false,
        pass: false,
        name: false,
    });

    const onChangeHandler = (event) => {
        switch (event.target.name) {
            case 'email':
                setInvalid((prev) => {
                    return { ...prev, email: !validateEmail(event) };
                });

                setclassList((prev) => {
                    let arr;
                    if (!validateEmail(event)) {
                        arr = replaceItems( prev, 'bg-blue-50', 'bg-red-100', 'outline-blue-400', 'outline-red-400' );
                    } else {
                        arr = replaceItems( prev, 'bg-red-100', 'bg-blue-50', 'outline-red-400', 'outline-blue-400' );
                    }

                    return arr;
                });

                return setEmail(event.target.value);
            case 'password':
                setInvalid((prev) => ({ ...prev, pass: !validatePassword(event), }));
                setclassList2((prev) => {
                    let arr;
                    if (!validatePassword(event)) {
                        arr = replaceItems( prev, 'bg-blue-50', 'bg-red-100', 'outline-blue-400', 'outline-red-400' );
                    } else {
                        arr = replaceItems( prev, 'bg-red-100', 'bg-blue-50', 'outline-red-400', 'outline-blue-400' );
                    }

                    return arr;
                });
                return setPass(event.target.value);
            case 'name':
                setInvalid((prev) => ({ ...prev, name: !validateName(event) }));
                setclassList3((prev) => {
                    let arr;
                    if (!validateName(event)) {
                        arr = replaceItems( prev, 'bg-blue-50', 'bg-red-100', 'outline-blue-400', 'outline-red-400' );
                    } else {
                        arr = replaceItems( prev, 'bg-red-100', 'bg-blue-50', 'outline-red-400', 'outline-blue-400' );
                    }

                    return arr;
                });
                return setName(event.target.value);
        }
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await axios.post('/signup', {
                email: email,
                password: pass,
                name: name,
            });
            setIsLoading(false);
            console.log(res);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
            setError(error);
        }
    };

    return (
        <Signup onSubmitHandler={onSubmitHandler} onChangeHandler={onChangeHandler} name={name} email={email} pass={pass} inValid={inValid} error={error} classList={classList} classList2={classList2} classList3={classList3} isLoading={isLoading}/>
    );
};

export default page;
