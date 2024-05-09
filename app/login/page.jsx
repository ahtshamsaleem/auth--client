'use client';

import Login from '@/components/Login';
import { validateEmail, validateName, validatePassword, } from '@/utilities/validator';
import React from 'react';
import { useState } from 'react';
import axios from '../../utilities/axiosInstance';
import { replaceItems } from '@/utilities/replaceItems';
import { useRouter } from 'next/navigation';

const page = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const router = useRouter()
   

    const [classList, setclassList] = useState([ 'bg-white', 'border outline-1', 'outline-blue-400', 'border-gray-300', 'text-gray-900', 'text-sm', 'rounded-lg', 'block', 'w-full', 'p-2.5']);
    const [classList2, setclassList2] = useState([ 'bg-white', 'border outline-1', 'outline-blue-400', 'border-gray-300', 'text-gray-900', 'text-sm', 'rounded-lg', 'block', 'w-full', 'p-2.5']);
   

    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState('');

    const [inValid, setInvalid] = useState({
        email: false,
        pass: false,
        
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
                        arr = replaceItems( prev, 'bg-white', 'bg-red-100', 'outline-blue-400', 'outline-red-400' );
                    } else {
                        arr = replaceItems( prev, 'bg-red-100', 'bg-white', 'outline-red-400', 'outline-blue-400' );
                    }

                    return arr;
                });

                return setEmail(event.target.value);
            case 'password':
                setInvalid((prev) => ({ ...prev, pass: !validatePassword(event), }));
                setclassList2((prev) => {
                    let arr;
                    if (!validatePassword(event)) {
                        arr = replaceItems( prev, 'bg-white', 'bg-red-100', 'outline-blue-400', 'outline-red-400' );
                    } else {
                        arr = replaceItems( prev, 'bg-red-100', 'bg-white', 'outline-red-400', 'outline-blue-400' );
                    }

                    return arr;
                });
                return setPass(event.target.value);
            
        }
    };

    const setAutoLogout = (milliseconds) => {
        setTimeout(() => {
            logoutHandler();
        }, milliseconds);
    };




    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await axios.post('/login', {
                email: email,
                password: pass,
                
            });

            
            setIsLoading(false);
            setError('');
            setEmail('');
            setPass('');


            localStorage.setItem('token', res?.data?.token);
            localStorage.setItem('userId', res?.data?.userId);
            const remainingMilliseconds = 60 * 60 * 1000;
            const expiryDate = new Date( new Date().getTime() + remainingMilliseconds );
            localStorage.setItem('expiryDate', expiryDate.toISOString());
            setAutoLogout(remainingMilliseconds);

            router.push(`/profile/${res?.data?.userId}`);


            
        } catch (error) {
            setIsLoading(false);
            console.log(error);
            setError(error);
        }
    };

    return (
        <Login onSubmitHandler={onSubmitHandler} onChangeHandler={onChangeHandler} email={email} pass={pass} inValid={inValid} error={error} classList={classList} classList2={classList2} isLoading={isLoading}/>
    );
};

export default page;
