import React from 'react'




export default function Query({ callApi, setInput, result }){
    return (
        <div className='Meal-Title'>
            <h2 className='Meal'>
                <form>
                    <label className='meal'>My Meal:</label>
                    <input className='textbox'
                        onChange={(e) => setInput(e.target.value)}
                        type="text" placeholder='4 whole eggs...'
                        required
                    ></input>
                </form>
                <div className='submit'>
                    <button className="button" onClick={callApi}>Submit</button>
                </div>
            </h2>
        </div>
    )
}


