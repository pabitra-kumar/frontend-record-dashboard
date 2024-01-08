import React, { useEffect } from 'react'

import { useContext } from 'react'
import UserContext from '../context/users/userContext'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import Content from '../components/Content'

export const Home = () => {

    const user = useContext(UserContext)

    const { status } = user;
    // console.log(status)

    const navigate = useNavigate();

    useEffect(() => {
        if (!status) {
            console.log('not logged in')

            navigate('/sign-in');
        }
    }, [navigate, status])



    // Api : https://user-management-backend-ovx4.onrender.com/api/users

    return (
        <>
            <section className='bg-gray-950 min-h-[100vh]'>
                <Navbar />
                <Content />
            </section>
        </>
    )
}