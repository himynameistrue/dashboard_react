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
  dashboardFabricData,
  dashboardFabricDataInstagram,
  dashboardFabricDataJacket,
  dashboardFabricDataJacketInstagram,
  dressFabricDatafs,
  dressFabricDatain,
  jumpFabricDatafs,
  jumpFabricDatain,
  skirtFabricDatafs,
  skirtFabricDatain,
  pantsFabricDatafs,
  pantsFabricDatain,
  kimonoFabricDatafs,
  kimonoFabricDatain,
  topFabricDatafs,
  topFabricDatain
  
} from "variables/fabricdata.js";


import Image from 'react-bootstrap/Image';
import cotton from "../assets/img/fabric/cotton.jpg";
import denim from "../assets/img/fabric/denim.jpg";
import leather from "../assets/img/fabric/leather.jpg";
import lace from "../assets/img/fabric/lace.jpg";
import paillettes from "../assets/img/fabric/pailettes.jpg";


class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data : dashboardFabricData.data , data2:dashboardFabricDataInstagram.data , name:'Total'  };
  }
  handleChange = (event) => {
    if(event.target.value=="1"){
      this.setState({ data: dashboardFabricDataJacket.data ,  data2:dashboardFabricDataJacketInstagram.data  });
    }
    if((event.target.value=="2")){
      // this.state = { data : dashboardFabricData.data , data2:dashboardFabricDataInstagram.data  };
      this.setState({ data : dashboardFabricData.data , data2:dashboardFabricDataInstagram.data  });
    }
    if((event.target.value=="3")){
      // this.state = { data : dashboardFabricData.data , data2:dashboardFabricDataInstagram.data  };
      this.setState({ data : topFabricDatafs.data , data2:topFabricDatain.data  });
    }
    if((event.target.value=="4")){
      // this.state = { data : dashboardFabricData.data , data2:dashboardFabricDataInstagram.data  };
      this.setState({ data : skirtFabricDatafs.data , data2:skirtFabricDatain.data  });
    }
    if((event.target.value=="5")){
      // this.state = { data : dashboardFabricData.data , data2:dashboardFabricDataInstagram.data  };
      this.setState({ data : kimonoFabricDatafs.data , data2:kimonoFabricDatain.data  });
    }
    if((event.target.value=="6")){
      // this.state = { data : dashboardFabricData.data , data2:dashboardFabricDataInstagram.data  };
      this.setState({ data : jumpFabricDatafs.data , data2:jumpFabricDatain.data  });
    }
    if((event.target.value=="7")){
      // this.state = { data : dashboardFabricData.data , data2:dashboardFabricDataInstagram.data  };
      this.setState({ data : dressFabricDatafs.data , data2:dressFabricDatain.data  });
    }
    if((event.target.value=="8")){
      // this.state = { data : dashboardFabricData.data , data2:dashboardFabricDataInstagram.data  };
      this.setState({ data : pantsFabricDatafs.data , data2:pantsFabricDatain.data  });
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
        <p style={{fontSize: 15, color:'#708090'}}>In this section you can find the most popular KIND OF FABRIC for the next season!</p>
        <p style={{color:'#708090'}}>Fabrics are detected from images taken from Instagram and Fashion shows. Hover on the pie to see the name and the frequence. In Total you can see the summary of the fabrics for all the basic garnments, futhermore you can select a more specific category</p>
        <p></p>
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
            <h7 tag="h5"> Analyzed Fabrics </h7>
            <div >
            <img src={cotton} style={{height:'4em' , width:'4em' , margin:'0.25em'}} ></img>
            <img src={denim} style={{height:'4em' , width:'4em', margin:'0.25em'}} ></img>
            <img src={lace} style={{height:'4em' , width:'4em', margin:'0.25em'}} ></img>
            <img src={leather} style={{height:'4em' , width:'4em', margin:'0.25em'}} ></img>
            <img src={paillettes} style={{height:'4em' , width:'4em', margin:'0.25em'}} ></img>
            <p style={{color:'#708090'}}>Left to right: cotton, denim, lace, leather, paillettes</p>
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
                  <CardTitle tag="h5">{this.state.name} Fabrics</CardTitle>
                  <p style={{fontSize:16, color:'#708090'}}>Distribution from Instagram</p>
                </CardHeader>
                <CardBody>
                  <Pie
                    data={this.state.data2}
                    options={dashboardFabricDataInstagram.options}
                  />
                
                </CardBody>
                <CardFooter>
                <div className="legend">
                    <i className="fa fa-circle "style={{color:"#98C1D9"}} /> LEATHER
                    <i className="fa fa-circle "style={{color:"#E0FBFC"}} /> DENIM
                    <i className="fa fa-circle "style={{color:"#EE6C4D"}} /> LACE
                    <i className="fa fa-circle "style={{color:"#3D5A80"}} />COTTON WOOL
                    <i className="fa fa-circle" style={{color:"#293241"}}/>PAILETTES STRASS
                  </div>
                  <hr />
                </CardFooter>
              </Card>
            </Col>
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">{this.state.name} Fabrics</CardTitle>
                  <p style={{fontSize:16, color:'#708090'}}>Distribution from Fashion Shows</p>
                </CardHeader>
                <CardBody>
                  <Pie
                    data={this.state.data}
                    options={dashboardFabricData.options}
                  />
                
                </CardBody>
         
                {/* ["#3D5A80", "#98C1D9", "#E0FBFC", "#EE6C4D", "#293241", "#DA7635", "#DB995A"] */}
                <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle "style={{color:"#98C1D9"}} /> LEATHER
                    <i className="fa fa-circle "style={{color:"#E0FBFC"}} /> DENIM
                    <i className="fa fa-circle "style={{color:"#EE6C4D"}} /> LACE
                    <i className="fa fa-circle "style={{color:"#3D5A80"}} />COTTON WOOL
                    <i className="fa fa-circle" style={{color:"#293241"}}/>PAILETTES STRASS
                  </div>
                  <hr />
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Map;

