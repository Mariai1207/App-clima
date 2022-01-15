import React from "react";
import { Link } from 'react-router-dom';


export default class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            city:''
        }
   
    }
    onInputChange=(e)=>{
       this.setState({
           city: e.target.value
       })                  
    }
   onAdd=()=>{
    this.props.onSearch(this.state.city) 
   }
    
    render(){
        return (
        <div>
            <h1>SearchBar</h1>
            <input type='text' onChange={(e)=>this.onInputChange(e)}></input>
            <button onClick={this.onAdd}> Agregar </button>
            

        </div>
        )
    }
}