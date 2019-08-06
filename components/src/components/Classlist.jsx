import React from 'react';

function Classlist(props) {
    const nameList = props.names.map(function(name){
        return (
            <li>{props.title} {name}</li>
        );
    });
    return (
        <ul>
           {nameList}
        </ul>
    );
}

export default Classlist;