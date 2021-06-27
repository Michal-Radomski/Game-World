import Layout from "../components/Layout";
import AuthorInfo from '../components/AuthorInfo';
import React from 'react'

function AboutUs() {

    const authorsData =
        [{
            name: 'Piotr',
            description: 'JS developer',
            image: '',
            github: '',

        },

        {
            name: 'Michał',
            description: 'JS developer',
            image: '',
            github: '',

        },

        {
            name: 'Paweł',
            description: 'JS developer',
            image: '',
            github: '',

        },

        {
            name: 'Paulina',
            description: 'Experienced JS developer',
            image: '',
            github: '',

        },

        ]
    return (


        <Layout>

            {/* map po tablicy authorsData */}
            {authorsData.map((author) => {

                // <h1>{author}</h1>
                // <AuthorInfo />

            })}

        </Layout>
    )
}

export default AboutUs;