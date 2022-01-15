import React from 'react';
import Cards from './componentes/Cards.jsx';
import NavBar from './componentes/NavBar.jsx';
import data from './data.js';

 
const apiKey='4ae2636d8dfbdc3044bede63951a019b'

export default class App extends React.Component{
  constructor(){
     super()
     this.state={
       arrayCities:''
     }
     this.setStat = this.setStat.bind(this);
   }
   setStat(){ // no funciona
    console.log('hola')
   }
    
   onClose(){
     alert('Close')
   }
   onSearch(cityOnSearch){ 
     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityOnSearch}&appid=${apiKey}&units=metric`)
     .then(response => response.json())
       .then((resource) => {
         if(resource.main !== undefined){
           const city={
             name: resource.name,
             id: resource.id,
             temp: resource.main.temp,
             tempMin: resource.main.temp_min,
             tempMax: resource.main.temp_max,
             pressure: resource.main.pressure,
             humidity: resource.main.humidity,
             icon: resource.weather[0].icon
           }
          this.setState({arrayCities:'maria'})
           console.log(this.state);
           // modificar el estado 
           
         
         }else{
           alert('Ciudad no encontrada')
         }                
       })
     
   } 
   render(){
 
      return (
        <div>          
          <Cards cities= {data} onClose={this.onClose}/>
          <NavBar onSearch={this.onSearch}/>               
        </div>
      )
    }
} 