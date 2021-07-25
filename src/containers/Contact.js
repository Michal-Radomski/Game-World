import React from 'react';
import { useState } from 'react';
import "../containers/Contact.css";
import { db } from "../components/Firebase";


export default function Form() {

    const [title, setTitle] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [tarea, setTarea] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();

        db.collection('contacts').add({
            title: title,
            surname: surname,
            email: email,
            tarea: tarea
        })
            .then(() => {
                alert('Message has been submitted to firebase');
            })
            .catch((error) => {
                alert(error.message);
            })

        setTitle('');
        setSurname('');
        setEmail('');
        setTarea('');

    };

    return (
        <div className="mainContact">
            <div className="contact-box">
                <div className="left"></div>
                <div className="right">
                    <form className="Contact" onSubmit={handleSubmit}>
                        <h3>Contact form</h3>
                        
                        <input type="tekst" className="field" required placeholder="Name" value={title} onChange={(e) => setTitle(e.target.value)} />
                        
                        <input type="tekst" className="field" required placeholder="Surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
                       
                        <input type="tekst" className="field" required placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                        
                        <textarea type="tekst" className="field" required placeholder="Message" value={tarea} onChange={(e) => setTarea(e.target.value)}>
                        </textarea>
                        <button className="btn" type="submit">Submit</button>

                    </form>
                </div>
            </div>

        </div>
    )
}
