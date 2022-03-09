import 'boxicons'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Search.css'
// Importar dispatch
import { useDispatch } from 'react-redux'
// import { setSearchAction } from '../redux/actions/search.actions'
import fetchGoogleProcess from '../redux/actions/search.actions'

export default function Search ({ buttonsHide = false }) {
    // Dispatch
    const dispatch = useDispatch()
    
    // States
    const [ myInput, setMyInput ] = useState('')
    const navigate = useNavigate()

    // Al buscar se guarda el termsearch
    const search = e => {
        e.preventDefault()
        console.log('Buscando...', myInput);

        // dispatch(setSearchAction(myInput))
        dispatch( fetchGoogleProcess( myInput) )
        navigate('/search')
    }
    
    return (
        <form className='search'>
            <div className="search__input">
                <box-icon name='search' color='#161616' ></box-icon>
                {/* INPUT */}
                <input type="text" value={myInput} onChange={ e => setMyInput(e.target.value) }/>
                {/* END INPUT */}
                <box-icon name='microphone' color='#161616' ></box-icon>
            </div>

            {/* === BUTTONS === */}
            { !buttonsHide ? 
            (
            <div className="search__btns">
                <button onClick={search} type='submit'>Google Search</button>
                <button>I'm Feeling Lucky</button>
            </div>
            )
                :
            (
            <div className="search__btns-hidden">
                <button onClick={search} type='submit'>Google Search</button>
                <button>I'm Feeling Lucky</button>
            </div>
            )}
        </form>
    )
}