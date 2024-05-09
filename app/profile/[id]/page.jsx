'use client'

import { useParams, useRouter } from 'next/navigation'
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import axios from '../../../utilities/axiosInstance'
import {CheckCircleOutlined} from '@ant-design/icons'
import { CloseCircleOutlined } from '@ant-design/icons'



const page = () => {
   
    const router = useRouter();

    let   { id } = useParams();

    const [user, setUser] = useState({})

    useEffect(() => {
        
        const getUser = async () => {


            try {
                const {data} = await axios.get(`/user/${id}`);
                setUser(data)
            } catch (error) {
                router.push('/login')
                console.log(error)
            }

        }
        
        getUser();




        


    }, [])




  return (
    
    <div className='w-full flex justify-center bg-slate-300 '>
        <main>
        <h3>
        Welcome Home: <span className='text-xl font-semibold'>{user.name}</span>
        </h3>
        <h3>
            Your Email: <span className='text-xl font-semibold'>{user.email}</span>
        </h3>

        <div >
        
            <p>Status: 
            
            <span className='ml-3 mr-2'>
            {user.verified? <CheckCircleOutlined style={{
                color: '#008000'
            }}/> :
                <CloseCircleOutlined style={{
                color: '#FF0000'
            }}/>}
            </span>{user.verified ?  'Verified' : 'Not Verified'}</p>
            
        </div>
        

        </main>
    </div>
  )
}

export default page