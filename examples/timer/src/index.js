import React from 'react';
import { render } from 'react-dom';
import { Timer } from './Timer';

document.addEventListener('DOMContentLoaded', () => {
    render(
        <Timer/>,
        document.querySelector('.js-timer')
    );
});
