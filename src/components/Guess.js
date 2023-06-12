import React, {useState} from 'react'

function Guess() {
    const [guess, setGuess] = useState("")
    const [answer, setAnswer] = useState("")

    function handleSubmit(answer) {
        setAnswer(answer)
        setGuess("")
        console.log("Answer Submitted " + answer)
    }
    
    return (
        <div>
            <p>{answer}</p>
            <input name='guessInput' value={guess} onChange={e => setGuess(e.target.value)}/>
            <button name='enterButton' onClick={() => handleSubmit(guess)}>Enter</button>
        </div>
  )
}

export default Guess