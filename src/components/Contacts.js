import React from 'react';
import Contact from './Contact';

export default function Contacts({contacts}) {
    return (
        <div>
            <h1>Phone Book</h1>
            <ul>
                {contacts.map(contact => <Contact {...contact} />)}
            </ul>
        </div>
    )
}