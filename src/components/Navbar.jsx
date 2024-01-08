import React from 'react'

import { useContext } from 'react'
import UserContext from '../context/users/userContext'

export const Navbar = () => {
    const user = useContext(UserContext);

    const logout = () => {
        user.update();
    }
    return (
        <nav className='w-full bg-slate-800 py-[2vh] px-[2vw] flex justify-between items-center'>
            <h1 className='text-white text-xl'>SOME LOGO</h1>

            <div className='flex gap-5'>
                <h2 className='text-white text-xl'>
                    Username
                </h2>
                <button className='bg-white text-black px-2 py-1 rounded-md' onClick={() => logout()}>
                    Log Out
                </button>
            </div>
        </nav>
    )
}
