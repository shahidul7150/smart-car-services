import React from 'react';

const Footer = () => {
    const today = new Date();
    const year=today.getFullYear()
    return (
        <footer className=' bg-dark text-white py-3 '>
            <p className='text-center'>CopyrightÂ© { year}</p>
        </footer>
    );
};

export default Footer;