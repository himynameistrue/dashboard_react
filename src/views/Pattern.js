/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// core components
import {
  totalPatternDatafs,
  totalPatternDatain,
  topPatternDatafs,
  topPatternDatain,
  skirtPatternDatafs,
  skirtPatternDatain,
  pantsPatternDatafs,
  pantsPatternDatain,
  jacketPatternDatafs,
  jacketPatternDatain,
  dressPatternDatafs,
  dressPatternDatain,
  kimonoPatternDatafs,
  kimonoPatternDatain,
  jumpPatternDatafs,
  jumpPatternDatain
  
} from "variables/patterndata.js";

import Image from 'react-bootstrap/Image';
import floral from "../assets/img/pattern/floral.jpeg";
import solidcolor from "../assets/img/pattern/solidcolor.jpeg";
import camo from "../assets/img/pattern/camo.jpeg";
import checks from "../assets/img/pattern/checks.jpeg";
import dotted from "../assets/img/pattern/dotted.jpeg";
import leopard from "../assets/img/pattern/leopard.jpg";
import stripes from "../assets/img/pattern/stripes.jpg";
class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data : totalPatternDatafs.data , data2:totalPatternDatain.data ,name:'Total' };
  }
  handleChange = (event) => {
    if(event.target.value=="1"){
      this.setState({ data: jacketPatternDatafs.data ,  data2:jacketPatternDatain.data  });
    }
    if((event.target.value=="2")){
      // this.state = { data : dashboardFabricData.data , data2:dashboardFabricDataInstagram.data  };
      this.setState({ data : totalPatternDatafs.data , data2:totalPatternDatain.data  });
    }
    if((event.target.value=="3")){
      // this.state = { data : dashboardFabricData.data , data2:dashboardFabricDataInstagram.data  };
      this.setState({ data : topPatternDatafs.data , data2:topPatternDatain.data  });
    }
    if((event.target.value=="4")){
      // this.state = { data : dashboardFabricData.data , data2:dashboardFabricDataInstagram.data  };
      this.setState({ data : skirtPatternDatafs.data , data2:skirtPatternDatain.data  });
    }
    if((event.target.value=="5")){
      // this.state = { data : dashboardFabricData.data , data2:dashboardFabricDataInstagram.data  };
      this.setState({ data : kimonoPatternDatafs.data , data2:kimonoPatternDatain.data  });
    }
    if((event.target.value=="6")){
      // this.state = { data : dashboardFabricData.data , data2:dashboardFabricDataInstagram.data  };
      this.setState({ data : jumpPatternDatafs.data , data2:jumpPatternDatain.data  });
    }
    if((event.target.value=="7")){
      // this.state = { data : dashboardFabricData.data , data2:dashboardFabricDataInstagram.data  };
      this.setState({ data : dressPatternDatafs.data , data2:dressPatternDatain.data  });
    }
    if((event.target.value=="8")){
      // this.state = { data : dashboardFabricData.data , data2:dashboardFabricDataInstagram.data  };
      this.setState({ data : pantsPatternDatafs.data , data2:pantsPatternDatain.data  });
    }
    console.log("target:" +event.target.value);
    this.setState({name:event.target.selectedOptions[0].text});
    // this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <>
      
        <div className="content">
        <p> </p>
        <p style={{fontSize: 15, color:'#708090'}}>In this section you can find the most popular PATTERNS for the next season!</p>
        <p style={{color:'#708090'}}>Patterns are detected from images taken from Instagram and Fashion shows. Hover on the pie to see the name and the frequence. In Total you can see the summary of the patterns for all the basic garnments, futhermore you can select a more specific category</p>
       <p></p>
        <Row>
            <Col lg="3" md="6" sm="6">
            <p style={{fontSize: 20}}>Choose the category: </p>
        <div style={{margin: "6px"}}>
        <select className="browser-default custom-select" onChange={this.handleChange} >
        <option value="2">Total</option>
          <option value="3">Top</option>
          <option value="4">Skirt</option>
          <option value="5">Kimono</option>
          <option value="6">Jumpsuit</option>
          <option value="7">Dress</option>
          <option value="8">Pants</option>
          <option value="1">Jacket</option>
        </select>

      </div>
      </Col>
      <Col>
        <Card>
          <CardBody >
            <h7 tag="h5"> Analyzed Patterns </h7>
            <div >
            {/* <p>floral    camo    checks    solid color    leopard    dotted</p> */}
            <img src={floral} style={{height:'4em' , width:'4em' , margin:'0.25em'}} ></img>
            {/* <p>camo</p> */}
            <img src={camo} style={{height:'4em' , width:'4em', margin:'0.25em'}} ></img>
            {/* <p>checks</p> */}
            <img src={checks} style={{height:'4em' , width:'4em', margin:'0.25em'}} ></img>
            {/* <p>solid color</p> */}
            <img src={solidcolor} style={{height:'4em' , width:'4em', margin:'0.25em'}} ></img>
            {/* <p>leopard</p> */}
            <img src={leopard} style={{height:'4em' , width:'4em', margin:'0.25em'}} ></img>
            {/* <p>dotted</p> */}
            <img src={dotted} style={{height:'4em' , width:'4em', margin:'0.25em'}} ></img>
            <img src={stripes} style={{height:'4em' , width:'4em', margin:'0.25em'}} ></img>
            <p style={{color:'#708090'}}>Left to right: floral, camo, checks, solid color, leopard, dotted and stripes</p>
            </div>
          {/* <Badge pill variant="light" style={{fontSize:23, margin: 2, backgroundColor: '#98C1D9'}}>{this.state.positive} Positive Sentiment </Badge> 
          <Badge pill variant="light" style={{fontSize:23, margin: 2, backgroundColor: '#98C1D9'}}>{this.state.negative} Negative Sentiment </Badge>  */}
                                   
        </CardBody>
      </Card>
      </Col>           
      </Row>
          <Row>
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">{this.state.name} Pattern</CardTitle>
                  <p style={{fontSize:16, color:'#708090'}}>Distribution from Instagram</p>
                </CardHeader>
                <CardBody>
                  <Pie
                    data={this.state.data2}
                    options={totalPatternDatain.options}
                  />
                
                </CardBody>
                <CardFooter>
                <div className="legend">
                    <i className="fa fa-circle " style={{color:"#3D5A80"} }/> SOLID COLOR{" "}
                    <i className="fa fa-circle "style={{color:"#98C1D9"} } /> FLORAL{" "}
                    <i className="fa fa-circle "style={{color:"#E0FBFC"} } /> CHECKS{" "}
                    <i className="fa fa-circle "style={{color:"#EE6C4D"} } />STRIPES{" "}
                    <i className="fa fa-circle "style={{color:"#293241"} }/>LEOPARD{" "}
                    <i className="fa fa-circle"  style={{color:"#DA7635"}} />DOTTED{" "}
                    <i className="fa fa-circle " style={{color:"#DB995A"}} />CAMO{" "}
                  </div>
                  <hr />
                </CardFooter>       
              </Card>
            </Col>
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">{this.state.name} Pattern</CardTitle>
                  <p style={{fontSize:16, color:'#708090'}}>Distribution from Fashion Shows</p>
                </CardHeader>
                <CardBody>
                  <Pie
                    data={this.state.data}
                    options={totalPatternDatafs.options}
                  />
                
                </CardBody>
                <CardFooter>
                <div className="legend">
                    <i className="fa fa-circle " style={{color:"#3D5A80"} }/> SOLID COLOR{" "}
                    <i className="fa fa-circle "style={{color:"#98C1D9"} } /> FLORAL{" "}
                    <i className="fa fa-circle "style={{color:"#E0FBFC"} } /> CHECKS{" "}
                    <i className="fa fa-circle "style={{color:"#EE6C4D"} } />STRIPES{" "}
                    <i className="fa fa-circle "style={{color:"#293241"} }/>LEOPARD{" "}
                    <i className="fa fa-circle"  style={{color:"#DA7635"}} />DOTTED{" "}
                    <i className="fa fa-circle " style={{color:"#DB995A"}} />CAMO{" "}
                  </div>
                  <hr />
                  {/* <div className="stats">
                    <i className="fa fa-calendar" /> Number of emails sent
                  </div> */}
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Notifications;

