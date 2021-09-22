import React from 'react';


export const Message = (props) => {
    
    const headertext = [
        "header",
        (props.active ? 'active' : ''),
        (props.disabled ? 'disabled' : ''),
    ].join(' ');

    return React.createElement(props.tag || 'h1', {className: headertext}, props.children);
}