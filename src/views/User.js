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
import { Line, Pie, Bar } from "react-chartjs-2";


import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

import {
 LuxuryBrands 
} from "variables/charts.js";

import {
  catwalkBarChart
 } from "variables/catwalkBarChart.js";
 

const LuxuryBrandsOptions = {
  /*onClick: (e, element) => {
    if (element.length > 0) {
      alert("");
      //return (<Redirect push to='/dashboard' />)
      //e.props.history.push('/dashboard');
      window.location.href="/dashboard"
    }
  },*/
  
  legend: {
    display: true,
    position: "top",
  },
  scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Number of interactions'
      }
    }]
  }
};



var defaultMessage = 'Click on the plot to see the value along with the label';


class User extends React.Component {
  /*constuctor() {
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange() {
    let path = `newPath`;
    this.props.history.push(path);
  }

constructor(props) {
  super(props);

  this.state = {
    message: '',
    enabled: false
  }

  this.trackPlotClick = this.trackPlotClick.bind(this);
  this.resetChart = this.resetChart.bind(this);
  this.dataPlotClick = this.dataPlotClick.bind(this);
}
trackPlotClick() {
  FusionCharts.addEventListener('dataplotClick', this.dataPlotClick);
  this.setState({
      message: defaultMessage,
      enabled: true
  });
}
dataPlotClick(eventObj, dataObj) {
  this.setState({
      message: [
          'You have clicked on plot ',
          <strong>{dataObj.categoryLabel}</strong>,
          ' whose value is ',
          <strong>{dataObj.displayValue}</strong>
      ]
  });
}*/

handleChartClick(element) {
  
}
  render() {
    return (
      <>
        <div className="content">
          <p>Here you can see the influence of the top luxury brand during the last fashion shows.</p>
          <p className="card-category">Click on one brand to see new trends</p>
       
        <Card>
        <Bar data={LuxuryBrands.data}
            width={100}
            height={45}
            options={LuxuryBrandsOptions}
            //redirectPage = {this.redirectPage}
            onElementsClick={elem => {
              var label = LuxuryBrands.data.labels;
              console.log("Name:", label[elem[0]._index]);
              if(label === "Versace")
              this.props.history.push('/dashboard');
            }}
            
            
            
        />
         
        
        </Card>
        </div>
      </>
    );
  }
}


export default User;
