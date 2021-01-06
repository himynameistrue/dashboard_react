import React,{ Component } from 'react'
import { Tooltip } from '@material-ui/core'; 
class Box extends Component{ 
  constructor(props){ 
    super(props) 
    this.handleChangeColor = this.handleChangeColor.bind(this) 
  } 
  
  // Handler callback 
  handleChangeColor(){ 
    
    // Call parent component cahngeColor  method passing the 
    // color value of div 
    this.props.changeColor(this.props.color) 
  } 
  
  render(){ 
    
    // Create a div component and assign the given  
    // color value by BoxContainer component as its 
    // background color 
    return <div>
      <Tooltip title={this.props.color+': '+this.props.number}>
      <div
      onClick={this.handleChangeColor}  
      style={{
        margin:'0.2em' ,
       backgroundColor:this.props.color,  
                  width:'4em', height:'4em' , borderRadius:'0.2em' , borderStyle: 'solid' ,borderWidth:'0.05em',
                borderColor:'#80808069'}}  
                 ></div>



    {/* <p style={{  textAlign: 'center',
 fontSize:"0.25em"}}>{this.props.color}{': '}{this.props.number}</p>         */}
      </Tooltip>            
    </div>
    
  } 
} 
  
export default Box