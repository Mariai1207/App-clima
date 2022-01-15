import React from 'react';

export default class Card extends React.Component{
    constructor (props){ // recibe name, min, max, img y onClose
        super(props)
    }
    render(){
        return(
            <div>
                <h1>Card</h1>
                <h1>{this.props.name}</h1>
                <h2>Min: {this.props.min}</h2>
                <h2>Max: {this.props.max}</h2>
                <img src={this.props.img} />                
                <button onClick={this.props.onClose}> X</button>
            </div>
            )

    
    }
}