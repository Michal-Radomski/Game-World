import React from 'react';
import { useState } from 'react';
import "./Contact.css";


export default function Form() {

    const [title, setTitle] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [tarea, setTarea] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();

        const formData = { title, surname, tarea };
        console.table(formData);

    }

    return (
        <div>
            <form className="Contact" onSubmit={handleSubmit}>
                <h3>Formularz kontaktowy</h3>
                <label>Imię</label>
                <input type="tekst" required placeholder="Imię" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Nazwisko</label>
                <input type="tekst" required placeholder="Nazwisko" value={surname} onChange={(e) => setSurname(e.target.value)} />
                <label>E-mail</label>
                <input type="tekst" required placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Wiadomość</label>
                <textarea type="tekst" required placeholder="Wiadomość" value={tarea} onChange={(e) => setTarea(e.target.value)}>
                </textarea>
                <button type="submit">Wyślij</button>
                <p>{title}</p>
                <p>{surname}</p>
                <p>{email}</p>
                <p>{tarea}</p>
            </form>
       











       
        </div>
    )
}
