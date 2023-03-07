import React, { useState, useEffect } from 'react'

const Map = () => {
    const [data, setData] = useState();

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos').then((response) => response.json());
        setData(response);
    }
    return (
        <div>
            <div className='container text-center text-success'>
                <h2>Photos Tittles</h2>
            </div>
            {data && data.map((item) => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default Map;