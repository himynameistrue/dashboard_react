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

class User extends React.Component {
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
            options={LuxuryBrands.options}/>
        </Card>
        </div>
      </>
    );
  }
}

export default User;
