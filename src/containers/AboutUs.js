import "./AboutUs.css";

import React from "react";
import Authors from "../components/Authors";

function AboutUs() {

    const authorsData =
        [{
            name: 'Piotr',
            description: 'JS developer',
            image: <img src={require('../images/facet.jpg').default} height={200} width={300} alt="facet"></img>,
            github: <a href="https://github.com/piotrekzak-source/jfdzr3-projects-game-over">Github!</a>,
            info: "I love playing computer games, especially sports games. My favorite game is FIFA.",
            id: 1,
        },

        {
            name: 'Michał',
            description: 'JS developer',
            image: <img src={require('../images/facet2.jpg').default} height={200} width={300} alt="facet"></img>,
            github: <a href="https://github.com/infoshareacademy/jfdzr3-projects-game-over">Github!</a>,
            info: "I really enjoy playing strategy games.",
            id: 2,
        },

        {
            name: 'Paweł',
            description: 'JS developer',
            image: <img src={require('../images/facet3.jpg').default} height={200} width={300} alt="facet"></img>,
            github: <a href="https://github.com/infoshareacademy/jfdzr3-projects-game-over">Github!</a>,
            info: "I really enjoy playing RPG games.",
            id: 3,
        },

        {
            name: 'Paulina',
            description: 'Experienced JS developer',
            image: <img src={require('../images/kobieta.jpg').default} height={200} width={300} alt="kobieta"></img>,
            github: <a href="https://github.com/infoshareacademy/jfdzr3-projects-game-over">Github!</a>,
            info: "My favorite game is the Sims.",
            id: 4,
        },
    ];

    const personlist = authorsData.map((authorsData) => <Authors key={authorsData.id} authorsData={authorsData} />);
    
    return (
        <div className="aboutuspage">
            <div className="about">
                <h1>About us</h1>
                    {personlist}
                
            </div>
        </div>
    );
}

export default AboutUs;
