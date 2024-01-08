import React, { useState, useEffect } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const Content = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [length, setLength] = useState(0);
    const [gender, setGender] = useState({});
    const [domains, setDomains] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://user-management-backend-ovx4.onrender.com/api/users');
                if (!response.ok) {
                    throw new Error('Network request failed');
                }
                const result = await response.json();

                const len = result.length;
                let gen = {};
                let dom = {};
                result.forEach(el => {
                    const k = el.gender;

                    if (gen[k]) {
                        gen[k] += 1;
                    } else {
                        gen[k] = 1;
                    }
                    const j = el.domain;

                    if (dom[j]) {
                        dom[j] += 1;
                    } else {
                        dom[j] = 1;
                    }
                });
                console.log(dom);
                setLength(len);
                setGender(gen);
                setDomains(dom);
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // The empty dependency array ensures that the effect runs once after the initial render

    if (loading) {
        return <p className='text-white'>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <section className='flex justify-center items-center w-full '>

            <div className='bg-neutral-600 p-16 mt-10 rounded-xl flex flex-col gap-10 text-white lg:w-[60%] w-[90%] '>
                <h1 className='text-2xl font-semibold'>  KEY PERFORMANCE INDICATOR  </h1>
                <div className="flex gap-10 lg:flex-row flex-col items-center justify-center">
                    <h2 className='text-2xl font-semibold'> Gender </h2>
                    <PieChart
                        data={[
                            { title: 'Female', value: gender.Female, color: '#E38627' },
                            { title: 'Male', value: gender.Male, color: '#C13C37' },
                        ]}
                        label={({ dataEntry }) => dataEntry.title}
                        className='h-64 w-64'
                    />
                    <h2 className='text-2xl font-semibold'>
                        TOTAL USER = {length} <br />
                        FEMALE = {gender.Female} <br />
                        MALE = {length - gender.Female}
                    </h2>
                </div>
                <div className=" flex flex-col gap-3 justify-center w-full">
                    <hr />
                    <hr className='w-[90%]' />
                    <hr />
                </div>


                <div className="flex gap-10 lg:flex-row flex-col items-center justify-center">
                    <h2 className='text-2xl font-semibold'> Employee <br /> Domain </h2>
                    <PieChart
                        data={[
                            { title: 'IT', value: domains.IT, color: '#E38627' },
                            { title: 'Management', value: domains.Management, color: '#3498db' },
                            { title: 'Marketing', value: domains.Marketing, color: '#e74c3c' },
                            { title: 'Sales', value: domains.Sales, color: '#2ecc71' },
                            { title: 'Finance', value: domains.Finance, color: '#f39c12' },
                            { title: 'Business Dev.', value: domains["Business Development"], color: '#9b59b6' },
                            { title: 'UI Designing', value: domains["UI Designing"], color: '#1abc9c' },
                        ]}
                        label={({ dataEntry }) => dataEntry.title}
                        labelStyle={{
                            fontSize: '5px',
                            fontFamily: 'sans-serif',
                        }}
                        className='h-[300px] w-[300px]'
                    />
                    <h2 className='text-2xl font-semibold'>
                        TOTAL USER = {length} <br />
                        IT = {domains.IT} <br />
                        Management = {domains.Management} <br />
                        Marketing = {domains.Marketing} <br />
                        Sales = {domains.Sales} <br />
                        Business Development = {domains["Business Development"]} <br />
                        UI Designing = {domains["UI Designing"]} <br />
                    </h2>
                </div>

            </div>
        </section>
    )
}

export default Content;