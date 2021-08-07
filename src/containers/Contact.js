import React from 'react';
import { useState } from 'react';
import "../containers/Contact.css";
import { db } from "../components/Firebase";


export default function Form() {

    const [title, setTitle] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [tarea, setTarea] = useState('');

    //errors
    const [titleErr, setTitleErr] = useState({});
    const [surnameErr, setSurnameErr] = useState({});
    const [emailErr, setEmailErr] = useState({});
   

    const handleSubmit = (e) => {

        e.preventDefault();
        const isValid = formValidation();

        if (isValid){

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

        }

        const formValidation= () =>{
            
            const titleErr = {};
            const surnameErr = {};
            const emailErr = {};
         
            let isValid = true;

            if (title.trim().length < 5 ){
                titleErr.firstNameShort = "First name is too short";
                isValid = false;
            }

            if (title.trim().length > 10) {
                titleErr.firstNameLong = "First name is too long";
                isValid = false;
            }
           

            if (surname.trim().length < 2) {
                surnameErr.surnameShort= "Your surname is too short";
                isValid = false;
            }
            if (surname.trim().length > 15) {
                surnameErr.surnameLong = "Your surname is too long";
                isValid = false;
            }
            if (!email.includes("@")){
                emailErr.emailChecking = "Incorrect email address";
                isValid = false;
            }

            
            setTitleErr(titleErr);
            setSurnameErr(surnameErr);
            setEmailErr(emailErr);
            return isValid;
        }



        

    return (
        <div className="mainContact">
            <div className="contact-box">
                <div className="left"></div>
                <div className="right">
                    <form className="Contact" onSubmit={handleSubmit}>
                        <h3 className="contact-header">Contact form</h3>
                        
                        <input type="text" className="field" required placeholder="Name" value={title} onChange={(e) => setTitle(e.target.value)} />
                        {Object.keys(titleErr).map((key)=>{
                            return <div style={{ color: "red" }}>{titleErr[key]}</div>
                        })}
                        <input type="text" className="field" required placeholder="Surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
                        {Object.keys(surnameErr).map((key) => {
                            return <div style={{ color: "red" }}>{surnameErr[key]}</div>
                        })}
                        <input type="text" className="field" required placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                        {Object.keys(emailErr).map((key) => {
                            return <div style={{ color: "red" }}>{emailErr[key]}</div>
                        })}
                        <textarea type="text" className="field" required placeholder="Message" value={tarea} onChange={(e) => setTarea(e.target.value)}>
                        </textarea>
                        <button className="btn" type="submit">Submit</button>

                    </form>
                </div>
            </div>

        </div>
    )
}
