import React, {useState, useEffect} from 'react';
import Contact from './Contact';

const contacts = [
    {
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
  }, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
  }, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
  }, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
  }, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
  }, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
  }];

export default function Contacts() {
    const [search, setSearch] = useState('');
    const [maleChk, setMaleChk] = useState(true);
    const [femaleChk, setFemaleChk] = useState(true);
    const [noneChk, setNoneChk] = useState(true);
    const [fileteredContacts, setFileteredContacts] = useState([]);

    useEffect(() => {
        setFileteredContacts(
            contacts.filter( contact => {
                return(
                contact.firstName.toLowerCase().includes(search.trim().toLowerCase()) ||
                contact.lastName.toLowerCase().includes(search.trim().toLowerCase()) ||
                contact.phone.includes(search.trim()) )
            })
    )}, [search]);

    return (
        <div>
            <h1>Phone Book</h1>
            <p>Filter by name or phone number</p>
            <input 
                    type="text"
                    placeholder="search" 
                    value={search}
                    onChange={ e => {setSearch(e.target.value)}} />
            <div>
            <p>Filter by gender</p>
                <label>male
                    <input type="checkbox" name="male" checked={maleChk} onChange={() => setMaleChk(!maleChk)}/>
                </label>
                <label>female
                    <input type="checkbox" name="female" checked={femaleChk} onChange={() => setFemaleChk(!femaleChk)}/>
                </label>
                <label>none
                    <input type="checkbox" name="none" checked={noneChk} onChange={() => setNoneChk(!noneChk)}/>
                </label>
            </div>

            {fileteredContacts.length < 1 && (
                <h3>No data matches your search...</h3>
            )}

            <ul>
                {fileteredContacts.map(contact => <Contact {...contact} />)}
            </ul>
        </div>
    )
}