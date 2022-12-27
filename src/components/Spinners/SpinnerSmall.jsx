import React from 'react';
import { Image } from 'react-bootstrap';
import smallSpinner from '../../images/small-spinner.png';
import './Spinner.css';

const SpinnerSmall = () => {
    return (
        <div className='small-spinner text-center'>
            <Image src={smallSpinner}></Image>
        </div>
    );
};

export default SpinnerSmall;