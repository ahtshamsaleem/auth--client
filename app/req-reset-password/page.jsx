'use client'
import Alert from '@/components/Alert';
import { replaceItems } from '@/utilities/replaceItems';
import { validateEmail } from '@/utilities/validator';
import axios from '../../utilities/axiosInstance';
import React, { useState } from 'react'
import ReqResetPassword from '../../components/ReqResetPassword';

const Page = () => {

    const [email, setEmail] = useState('');
    const [inValid, setInvalid] = useState({
        email: false
        
    });
    const [alert, setAlert] = useState({
        status: false,
        message: ''
    });
    const [classList, setclassList] = useState([ 'bg-white', 'border outline-1', 'outline-blue-400', 'border-gray-300', 'text-gray-900', 'text-sm', 'rounded-lg', 'block', 'w-full', 'p-2.5'])
    const [isLoading, setIsLoading] = useState(false)

    const [error, setError] = useState('');
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

                return setEmail(event.target.value);}
            }


            const onSubmitHandler = async (e) => {
                e.preventDefault();
                setIsLoading(true);
                try {
                    const res = await axios.post('/req-reset-password', {
                        email: email
               
                        
                    });
                    console.log(res)
                    if(res.status === 200 ) {
                        setAlert((prev) => {
                            return {
                                status: true,
                                message: res.data.message
                            }
                        })

                        setTimeout(() => {
                            console.log('i am settimeout');
                            setAlert((prev) => {
                                return {
                                    status: false,
                                    message: ''
                                }
                            })
                        }, 4000)
                    }
                    //localStorage.setItem('token', res?.data?.token);
                    setIsLoading(false);
                    setError('');
                    setEmail('');
                    
                    
                } catch (error) {
                    setIsLoading(false);
                    console.log(error);
                    setError(error);
                    setAlert((prev) => {
                        return {
                            status: false,
                            message: ''
                        }
                    })
                }
            };
  return (
    <>
        {alert.status && <Alert title={'Email sent successfully'} message={alert.message}/>}
    <ReqResetPassword email={email} inValid={inValid} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} error={error} isLoading={isLoading} classList={classList} />
    </>
  )
}

export default Page