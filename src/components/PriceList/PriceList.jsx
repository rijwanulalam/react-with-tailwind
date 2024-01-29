import React, { useEffect, useState } from 'react';
import Price from '../Price/Price';

const PriceList = () => {
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        fetch("prices.json")
        .then(res => res.json())
        .then(data => setPrices(data))
    },[])
    return (
        <div>
            <h3 className='text-5xl text-center bg-sky-100 my-5 p-5'>Price List</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center'>
                {
                    prices.map(price => <Price key={price.id} price={price}></Price>)
                }
            </div>
        </div>
    );
};

export default PriceList;