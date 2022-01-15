import React from "react";
import Card from "./Card.jsx";

export default class Cards extends React.Component{
    constructor(props){ // recibe un arreglo(estado de app) y con cada elemento hace una card pasasndo name, min, max, img, onclose
        super(props)
    }
    render(){
        return (
        <div>
            {this.props.cities.map(city=> <Card 
                max={city.main.temp_max}
                min={city.main.temp_min}
                name={city.name}
                //img={city.weather[0].icon} 
                onClose={this.props.onClose}        
            />)

            }
            <h1>Cards</h1>
             
        </div>
        )
    }
}