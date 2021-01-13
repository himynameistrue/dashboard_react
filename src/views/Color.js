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
import BoxContainer from "components/BoxContainer";
import BoxInsta from "components/BoxInsta";
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
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
  dashboardFabricData,
  skirtColorFs
  
} from "variables/charts.js";
import { rgbValue, generateColors , generateColorInsta } from 'components/helpers'

class Icons extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value :'1',  name: 'Total' };
  }
  handleChange = (event) => {
  
      this.setState({ value : event.target.value , name:event.target.selectedOptions[0].text });
    
  
    // console.log("target:" +event.target.value);
    // this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <>
        <div className="content">
        <p> </p>
        <p style={{fontSize: 15, color:'#708090'}}>In this section you can find the most popular COLORS for the next season!</p>
        <p style={{color:'#708090'}}>Colors are detected from images taken from Instagram and Fashion shows. Hover on the colors to see the name and the frequence. In Total you can see the summary of the colors for all the basic garments, moreover you can select a more specific category to see the related top colors</p>
        <p></p>
        <Row>
            <Col lg="3" md="6" sm="6">
            <p></p>
          <p style={{fontSize: 20}}>Choose the category: </p>
        <div style={{margin: "6px"}}>
        <select className="browser-default custom-select" onChange={this.handleChange} >
        <option value="1" target="Total">Total</option>
          <option value="2" target="Top">Top</option>
          <option value="6" target="Skirt">Skirt</option>
          <option value="7"target="Kimono">Kimono</option>
          <option value="5"target="Jumpsuit">Jumpsuit</option>
          <option value="3"target="Dress">Dress</option>
          <option value="4"target="Jacket">Jacket</option>
          <option value="8"target="Pants">Pants</option>
    
        </select>

      </div>
      </Col>
      </Row>
          <Row>
            <Col md="6">
            <Card>
                <CardHeader>
                  <CardTitle tag="h5">{this.state.name} Colors</CardTitle>
                  <p style={{fontSize:16, color:'#708090'}}>Distribution from Instagram</p>
                </CardHeader>
                <CardBody>
                  <BoxInsta colors={generateColorInsta(this.state.value)} 
                  value={this.state.value} name='in'
                  
                  />
                
                </CardBody>
                <CardFooter>
                  <hr />
                </CardFooter>
              </Card>
            
              </Col>
            <Col md="6">
            <Card>
                <CardHeader>
                  <CardTitle tag="h5">{this.state.name} Colors</CardTitle>
                  <p style={{fontSize:16, color:'#708090'}}>Distribution from Fashion Shows</p>
                </CardHeader>
                <CardBody>
                  <BoxContainer colors={generateColors(this.state.value)} 
                  value={this.state.value} name='fs'
                  
                  />
                
                </CardBody>
                <CardFooter>
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

export default Icons;

