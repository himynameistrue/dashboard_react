import React, { Component } from 'react'
import './BoxContainer.css'
import Box from './Box'
import { rgbValue, generateColors , generateColorInsta } from './helpers'

class BoxContainer extends Component {

  // Number of color boxes want shows by default 
  static defaultProps = {
    num: 18,
    
  }
  constructor(props) {
    super(props)
    let value = props.value;
    let name= props.name
    console.log(name+"na,e");
    // if(name=="in"){
      // this.state = {
        
      //   colors: generateColors(value)
      //   // Color state contains array of rgb color values 
        
      // }
     
    // if(name=='fs'){

    //   this.state = {

    //     // Color state contains array of rgb color values 
    //     colors: generateColors(value)
    //   }

    // // }

    // console.log(this.state.colors);
   
    
    this.changeColor = this.changeColor.bind(this)
  
  }
  

  changeColor(c) {

    // Create new random rgb color 
    // let newColor 
    // do{ 
    //   newColor = `rgb( 
    //     ${rgbValue()}, 
    //     ${rgbValue()}, 
    //     ${rgbValue()} 
    //   )` 

    // // If new rgb color is equal to previous  
    // // color of the box then again create new  
    // // rgb color value 
    // }while(newColor === c) 

    // // Change colors array state by inserting  
    // // new color value in place of previous color 
    // this.setState(st => ({ 
    //   colors : st.colors.map(color => { 
    //     if(color !== c) return color 
    //     return newColor 
    //   }) 
    // })) 
  }
  componentDidUpdate(prevProps, prevState){

   

      // this.setState( {

      //   // Color state contains array of rgb color values 
      //   colors: generateColorInsta(this.props.value)
      // });

  // }
}
  render() {
    return (
      <div className='BoxContainer'>
        {this.props.colors.map(color => (

          // For each color make a box component 
          <Box color={color.color} number={color.number} changeColor={this.changeColor} />
        ))}
      </div>
    )
  }
}

export default BoxContainer