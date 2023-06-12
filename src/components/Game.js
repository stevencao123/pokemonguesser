import React from 'react'

function getGuess() {
    return {"Name":"Bulbasaur", "Generation": 2, "Colour": "Green"}
}

function Game() {
    const guess = getGuess()
  return (
    <div>
        <ul>
            <li>{guess.Name}</li>
            <li>{guess.Generation}</li>
            <li>{guess.Colour}</li>
        </ul>
        
    </div>
  )
}

export default Game