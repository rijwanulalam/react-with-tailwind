import React from 'react';


const Link = ({route}) => {
    return (
        <div className='text-center'>
            
            <a href={route.path}>{route.name}</a>
        </div>
    );
};

export default Link;