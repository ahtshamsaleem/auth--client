import Link from 'next/link'
import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

const ResetPassword = ({onSubmitHandler, onChangeHandler, pass, cPass, isEqual, inValid, error, classList2, classList3, isLoading}) => {




  return (
    <form className="max-w-sm mx-auto mt-20 bg-slate-100 p-10 rounded-md" onSubmit={onSubmitHandler}>
  
  <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New password</label>
    <input onChange={onChangeHandler} value={pass} type="password" name="password" className={classList2.join(' ')} required />
    {inValid.pass && <p className="text-red-500">Invalid Password! It must contain 8 characters.</p>}
  </div>

  <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm New password</label>
    <input onChange={onChangeHandler} value={cPass} type="password" name="cpassword" className={classList3.join(' ')} required />
    {inValid.cPass && <p className="text-red-500">Invalid Password! It must contain 8 characters.</p>}
    {!isEqual && <p className="text-red-500">Password does not match.</p>}
  </div>

  <button type="submit" style={{
    width: '100px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }} className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
   {isLoading ? <ThreeDots visible={isLoading}
  height="40"
  width="40"
  color="#fff"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""/> : 'Reset'}  </button> <p className='mt-2'> <Link href={'/login'}>Go to Login?</Link></p>
  {error && <h3  className="text-red-500 p-3 align-middle text-center">{error.response ? error.response.data.message : error.message}</h3>}
</form>
  )
}

export default ResetPassword