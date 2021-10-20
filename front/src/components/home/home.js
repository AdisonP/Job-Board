import React, {Component} from 'react';
import SearchBar from './search_bar/SearchBar';
import Advlist from './advertisement_liste/advertisement_list';
import "./home.css";


export default class Home extends Component{
    render(){
        return <div id="home">
                <header> 
                    <div className="welcome-div">
                        <h1>Welcome to JobBoard</h1>
                        <h3>what are you looking for today?</h3>
                        <SearchBar />
                    </div>
                </header>
                <Advlist />
            </div>
        
    }
}