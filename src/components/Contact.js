import React from 'react';

export default function Contact({firstName, lastName, phone, gender}) {
    return (
        <li>
            <p>
                <span>{firstName} </span>
                <span>{lastName}</span>
            </p>
            <p>{phone}</p>
            <p>{gender}</p>
        </li>
    )
}