import React from 'react'

function Authors({ authorsData }) {
    return (
        <div>

            <h2>
                Hi! I'm {authorsData.name}. My position is {authorsData.description}.
            </h2>
            <p>{authorsData.info}</p>
            {authorsData.image}
            <br></br>
            {authorsData.github}
        </div>

    )
}
export default Authors;