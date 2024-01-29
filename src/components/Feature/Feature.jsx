import React from 'react';
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const Feature = ({feature}) => {
    return (
        <div className='flex items-center gap-2 mb-2'>
            <CheckBadgeIcon className="h-6 w-6 text-blue-500 cursor-pointer" />
            <span>{feature}</span>
        </div>
    );
};

export default Feature;