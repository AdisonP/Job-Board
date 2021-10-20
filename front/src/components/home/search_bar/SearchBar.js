import React, {Component} from 'react';
import "./SearchBar.css";


const SearchBar = () => {
        
    return (
        <div >
            <form className="SearchBar">
                <input className="search-bar" placeholder="Search for a job"></input>
                <input type="submit" value="GO" href="#"></input>
            </form>
        </div>
    );
}

export default SearchBar;