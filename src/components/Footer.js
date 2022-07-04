import React from 'react';

const Footer = () => {
    return (
        <footer>
            <small>Desenvolvido pelo Matheus Kristman</small>
            <div className='socials'>
                <a rel='noreferrer' target='_blank' href='https://github.com/MatheusKristman'>
                    <i className='fa-brands fa-github-square'></i>
                </a>
                <a
                    rel='noreferrer'
                    target='_blank'
                    href='https://www.linkedin.com/in/matheus-kristman-07a947171/'
                >
                    <i className='fa-brands fa-linkedin'></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
