import React from 'react'
import {SEARCH_LOCA} from '../../../../localization/ar/Language'

const Search = () => {
    return (
        <div className="home_search">
        <button ><i className="material-icons ">search</i></button>   
        <input type="text" name="search" placeholder={SEARCH_LOCA.searchPlaceholder}></input>
        </div>
    )
}

export default Search
