import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLoginForm from './GoogleLoginForm';

describe('Google Login Form', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GoogleLoginForm/>, div);
    });
});