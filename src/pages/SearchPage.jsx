import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import Search from "../components/Search";
import Response from '../response'
import './SearchPage.css'

export default function SearchPage () {
    //=== LIVE API CALL ===
    const data = useSelector( state => state.searchReducer.data.data)
    console.log(data);
    // console.log(data.items[0].pagemap.cse_image);

    //=== FAKE API ===
    // const data = Response;
    // console.log(data);

    return (
        <div className="container container-searchPage">
            <div className="searchPage__nav">
                <Link to='/'><img src="./logo.png" alt="logo" /></Link>
                <Search buttonsHide/>
            </div>

            { data && (
                <div className="searchPage__results">
                    <p className="searchPage__results-count">
                        About { data?.searchInformation.formattedTotalResults} {' '}
                        results ({data.searchInformation.formattedSearchTime}) 
                        for {data.queries.request[0].searchTerms}
                    </p>

                    {data?.items.map( result => (
                        <div className="searchPage__result">
                            {/* LEFT */}
                            <div className="searchPage__result-left">

                                <a href={result.link}>
                                    <span className="searchPage__result-link">
                                        {result.displayLink}
                                    </span>
                                    <h2 className="searchPage__result-title">
                                        {result.title}
                                    </h2>
                                </a>

                                <p className="searchPage__result-snippet">
                                    {result.snippet}
                                </p>
                            </div>

                            {/* RIGHT */}
                            {/* <div className="searchPage__result-right">
                                <img 
                                    className="searchPage__result-tmb"
                                    src={result.pagemap?.cse_image[0]?.src} 
                                    alt="" />
                            </div> */}
                        
                        </div>
                    ))}
                </div>
            )}

        </div>
    )
}