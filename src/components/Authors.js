import React from 'react'

function Authors({ authorsData }) {
    return (
        <div>

            <h2>
                Cześć! Jestem {authorsData.name}. Moje stanowisko to {authorsData.description}.
            </h2>
            <p>{authorsData.info}</p>
            {authorsData.image}
            <br></br>
            {authorsData.github}
        </div>

    )
}
export default Authors;