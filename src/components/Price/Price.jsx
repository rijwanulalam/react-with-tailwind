import React from 'react';

const Price = ({price}) => {
    return (
        <div>
            <h2>
                <span className='text-5xl text-sky-500'>{price.price}</span>
                <span>/month</span>
            </h2>
            <h4 className='text-3xl'>{price.name}</h4>
        </div>
    );
};

export default Price;