import React from 'react';
import { Button } from 'react-bootstrap';
import './Button.css';

const PrimaryButton = ({children, handler}) => {
    return (
        <Button className='primary-btn' onClick={handler}>
            {children}
        </Button>
    );
};

export default PrimaryButton; 