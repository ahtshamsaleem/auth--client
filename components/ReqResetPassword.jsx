import Link from 'next/link';
import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const ReqResetPassword = ({ onSubmitHandler, onChangeHandler, email, classList, error, inValid, isLoading }) => {
    return (
        <form
            className='max-w-sm mx-auto mt-20 bg-slate-100 p-10 rounded-md'
            onSubmit={onSubmitHandler}
        >
            <div className='mb-5'>
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Your email
                </label>
                <input
                    onChange={onChangeHandler}
                    value={email}
                    type='email'
                    name='email'
                    className={classList.join(' ')}
                    placeholder='name@mail.com'
                    required
                />
                {inValid.email && (
                    <p className='text-red-500'>Invalid Email Address!</p>
                )}
            </div>
            <button
                type='submit'
                style={{
                    width: '100px',
                    height: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                className='text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
                {isLoading ? (
                    <ThreeDots
                        visible={isLoading}
                        height='40'
                        width='40'
                        color='#fff'
                        radius='9'
                        ariaLabel='three-dots-loading'
                        wrapperStyle={{}}
                        wrapperClass=''
                    />
                ) : (
                    'Reset'
                )}{' '}
            </button>{' '}
            <p className='mt-2'>
                {' '}
                <Link href={'/login'}>Back to Login</Link>
            </p>
            {error && (
                <h3 className='text-red-500 p-3 align-middle text-center'>
                    {error.response
                        ? error.response.data.message
                        : error.message}
                </h3>
            )}
        </form>
    );
};

export default ReqResetPassword;
