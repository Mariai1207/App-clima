import React from "react";
import SearchBar from "./SearchBar.jsx";

export default class NavBar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
        <div>
            <h1>NavBar</h1>  
            <SearchBar onSearch={this.props.onSearch}/>
        </div>
        )
    }
}