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




var defaultMessage = 'Click on the plot to see the value along with the label';


class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chosen : "" };
  }

  changeSelected = (name) => {
    this.setState( {chosen: name});
  }

  render() {
    return (
      <>
        <div className="content">
          <p className="card-category">Here you can see the influence of the top luxury brand during the last fashion shows.</p>
          <p>Click on one brand to see new trends</p>
       
        <Card>
        <Bar data={LuxuryBrands.data}
            width={100}
            height={45}
            options={LuxuryBrands.options}
            changeSelected = {this.changeSelected}
            onElementsClick={elem => {
              var label = LuxuryBrands.data.labels;
              label = label[elem[0]._index];
              console.log("Name:", label);
              if(label === "Versace"){
                console.log(label === "Versace")
                this.props.history.push({pathname: '/admin/catwalk/versace', state: this.state});
              }
              if(label === "Balmain"){
                console.log(label === "Balmain")
                this.props.history.push({pathname: '/admin/catwalk/balmain', state: this.state});
              }
              if(label === "Gucci"){
                console.log(label === "Gucci")
                this.props.history.push({pathname: '/admin/catwalk/gucci', state: this.state});
              }
              /*if(!(label === "Balmain")){
                this.props.history.push({pathname: '/admin/balmain', state: this.state});
              }
              if(!(label === "Gucci")){
                this.props.history.push({pathname: '/admin/gucci', state: this.state});
              }
             */
            }}
            
        />
         
        
        </Card>
        </div>
      </>
    );
  }
}


export default User;
