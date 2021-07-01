import React from 'react';

const Header = ({ title }) => {
    return (
        <div className='d-flex flex-column aling-items-center'>
            <h1 className='title text-center p-3'></h1>
            <div className='underline mb-5'></div>
        </div>
    );
};

export default Header;