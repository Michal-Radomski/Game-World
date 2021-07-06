import "./AboutUs.css";
import AuthorInfo from '../components/AuthorInfo';
import React from 'react'
import Authors from "../components/Authors";
import Form from "../components/Form"


function AboutUs() {

    const authorsData =
        [{
            name: 'Piotr',
            description: 'JS developer',
            image: <img src={require('../images/facet.jpg').default} height={200} width={300}></img>,
            github: <a href="https://github.com/piotrekzak-source/jfdzr3-projects-game-over">Github!</a>,
            info: 'Uwielbiam grać w gry komputerowe, szczególnie sportowe. Moją ulubioną grą jest FIFA.',
            id: 1,

        },

        {
            name: 'Michał',
            description: 'JS developer',
            image: <img src={require('../images/facet2.jpg').default} height={200} width={300}></img>,
            github: <a href="https://github.com/infoshareacademy/jfdzr3-projects-game-over">Github!</a>,
            info: 'Bardzo lubię grać w gry strategiczne.',
            id: 2,

        },

        {
            name: 'Paweł',
            description: 'JS developer',
            image: <img src={require('../images/facet3.jpg').default} height={200} width={300}></img>,
            github: <a href="https://github.com/infoshareacademy/jfdzr3-projects-game-over">Github!</a>,
            info: 'Bardzo lubię grać w gry RPG.',
            id: 3,
        },

        {
            name: 'Paulina',
            description: 'Experienced JS developer',
            image: <img src={require('../images/kobieta.jpg').default} height={200} width={300}></img>,
            github: <a href="https://github.com/infoshareacademy/jfdzr3-projects-game-over">Github!</a>,
            info: 'Moją uluboną grą są Simsy.',
            id: 4,

        },

        ]


    const personlist = authorsData.map(authorsData => (
        <Authors key={authorsData.id} authorsData={authorsData} />
    ))


    return (

        <div className="app">

            <div className="about">
                <h1>About us</h1>
                {personlist}

                <Form></Form>


            </div>
        </div>



    );
}

export default AboutUs;