import { useEffect, useState } from 'react'
import { API_KEY, CTX_KEY} from './apikeys'
import Axios from 'axios'


const Use_google_search = termSearched => {
    const [ googleData, setGoogleData ] = useState(null)

    // Cada que termSearched se actualice se ejecutara
    useEffect(() => {

        const fetchDataGoogle = async() => {
            fetch( `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CTX_KEY}&q=${termSearched}` )
                .then( response => response.json())
                .then( responseJSON => setGoogleData(responseJSON))
        }
        // Ejecutamos
        fetchDataGoogle()

    }, [termSearched]) 

    return {googleData}
}

export default Use_google_search
