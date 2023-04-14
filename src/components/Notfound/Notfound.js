import React from 'react';

const Notfound = () => {
    const h1Style = {
        textAlign: 'center',
        marginTop: '250px',
        fontSize: '30px'
    }
    const pStyle ={
        textAlign: 'center',
    }
    return (
        
        <div>
            <h1 style={h1Style}>404 error, page not found</h1>
            <p style={pStyle}>The page you are looking for is either deleted or never existed </p>
        </div>
    );
};

export default Notfound;