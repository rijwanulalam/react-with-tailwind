import React from 'react';


const Link = ({route}) => {
    return (
        <div className='text-center hover:underline underline-offset-8'>
            
            <a className='font-bold' href={route.path}>{route.name}</a>
        </div>
    );
};

export default Link;