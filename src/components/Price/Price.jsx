import React from 'react';
import Feature from '../Feature/Feature';

const Price = ({price}) => {
    return (
        <div className='flex flex-col'>
            <h2 className='text-center'>
                <span className='text-5xl text-sky-500'>{price.price}</span>
                <span>/month</span>
            </h2>
            <h4 className='text-3xl text-center'>{price.name}</h4>
            <h5 className='text-2xl mb-3'>Features:</h5>
            {
                price.features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }
            <button className='text-2xl w-full bg-sky-500 text-center rounded py-2 mt-auto text-bold'>Buy Now</button>
        </div>
    );
};

export default Price;