'use client';
import ResetPassword from '@/components/ResetPassword'
import { replaceItems } from '@/utilities/replaceItems';
import { validatePassword } from '@/utilities/validator';
import { Alert } from 'antd'
import axios from '../../utilities/axiosInstance';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Page = () => {

    const [pass, setPass] = useState('');
    const [cPass, setcPass] = useState('');
    const [inValid, setInvalid] = useState({
        pass: false,
        cPass: false
        
    });
    const [isEqual, setIsEqual] = useState(true);
    const [alert, setAlert] = useState({
        status: false,
        message: ''
    });
    const [classList2, setclassList2] = useState(['bg-white', 'border outline-1', 'outline-blue-400', 'border-gray-300', 'text-gray-900', 'text-sm', 'rounded-lg', 'block', 'w-full', 'p-2.5']);
    const [classList3, setclassList3] = useState(['bg-white', 'border outline-1', 'outline-blue-400', 'border-gray-300', 'text-gray-900', 'text-sm', 'rounded-lg', 'block', 'w-full', 'p-2.5']);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');


    const searchParams = useSearchParams();

    //const token = searchParams.get('token');

    const router = useRouter();






    //Protected Route Logic
    useEffect(() => {
        if(!searchParams.get('token') || !searchParams.get('id')) {
            router.push('/login');
        }

    }, [])

    // Password Match Logic
    useEffect(() => {
        if(pass !== cPass && cPass.length > 0) {
            console.log(pass, cPass);
            setIsEqual(false)
        } else {
            setIsEqual(true)
        }
    }, [pass, cPass])




        
    const onChangeHandler = (event) => {
        switch (event.target.name) {
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

                case 'cpassword':
                

               
                
                setInvalid((prev) => ({ ...prev, cPass: !validatePassword(event), }));
                setclassList3((prev) => {
                    let arr;
                    if (!validatePassword(event)) {
                        arr = replaceItems( prev, 'bg-white', 'bg-red-100', 'outline-blue-400', 'outline-red-400' );
                    } else {
                        arr = replaceItems( prev, 'bg-red-100', 'bg-white', 'outline-red-400', 'outline-blue-400' );
                    }

                    return arr;
                });
                return setcPass(event.target.value);
            }}




            const onSubmitHandler = async (e) => {
                e.preventDefault();
                setIsLoading(true);
                setError('');


                const token = searchParams.get('token');
                const id = searchParams.get('id');

                try {
                    const res = await axios.post(`/reset-password?token=${token}&id=${id}`, {
                        password: pass
               
                        
                    });
                    console.log(res)
                    if(res.status === 201 ) {

                        


                        setAlert((prev) => {
                            return {
                                status: true,
                                message: res.data.message
                            }
                        })



                        setTimeout(() => {
                            router.push('/login');
                        }, 5000);
                        
                    }
                    //localStorage.setItem('token', res?.data?.token);
                    setIsLoading(false);
                    setError('');
                    setPass('');
                    setcPass('');
                    
                    
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
            }





















            // title={'Password Changed Successfully!'}




  return (
    <>
    
        {alert.status && <Alert  message={alert.message} />}
    <ResetPassword isEqual={isEqual} cPass={cPass} pass={pass} inValid={inValid} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} error={error} isLoading={isLoading} classList2={classList2} classList3={classList3}/>
    </>
  )
}

export default Page