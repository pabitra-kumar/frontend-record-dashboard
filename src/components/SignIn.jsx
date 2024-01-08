import { useContext, useState } from 'react'
import UserContext from '../context/users/userContext'
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {

    const user = useContext(UserContext);
    const navigate = useNavigate();

    const [form, setForm] = useState({});

    const formHandle = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }


    const onSubmit = async (e) => {
        e.preventDefault();

        const username = form.username;
        const password = form.password;

        let check = false;

        user.state.forEach(item => {
            if (item.username === username && item.password === password) {
                check = true;
            }
        });

        if (check) {
            await user.update();

            navigate('/');
        } else {
            alert('Username or Password is incorrect');
        }

    }

    return (
        <section className='bg-gray-950 md:flex-row  flex-col flex justify-center items-center w-[100vw] h-[100vh] gap-10'>

            <div className='flex flex-col p-10 bg-gray-900 rounded-xl w-[70%] md:w-1/3'>
                <h1 className='text-3xl text-white text-center'>Sign In</h1>
                <form className='flex flex-col mt-5 gap-5' onSubmit={(e) => onSubmit(e)}>
                    <input className='p-2 bg-gray-800 rounded-lg text-white ' type="text" placeholder='Username' name='username' onChange={(e) => formHandle(e)} required />
                    <input className='p-2 mt-2 bg-gray-800 rounded-lg text-white' type="password" placeholder='Password' name='password' onChange={(e) => formHandle(e)} />
                    <button className='p-2 mt-2 bg-gray-600 rounded-lg text-white'>Sign In</button>
                </form>
            </div>

            <div className='text-white text-xl' >
                UserName: user <br />
                Password: user12345 <br />
                <br />
                (For Testing Purpose)
            </div>
        </section>
    )
}
