"use client"
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const Dashboard = () => {
    const {data: session} = useSession();
  return (
    <div>
        {
            session ? (
                <>
                <h1>Welcome back</h1>
                <button onClick={() => signOut()}>Logout</button>
                </>
                
            ): (
                <>
                    <h1 className='text-red-600 '>You're not logged in</h1>
                    <button onClick={() => signIn('google')} className='border border-black rounded-lg mr-12 p-4'>Sign in with google</button>
                    <button onClick={() => signIn('github')} className='border border-black rounded-lg p-4'>Sign in with gitHub</button>
                </>
            )
                
  
        }
    </div>
  )
}

export default Dashboard