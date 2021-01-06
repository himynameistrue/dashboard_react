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

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardFooter,
  Table,
  Row,
  Col,
} from "reactstrap";
import { Line, Pie } from "react-chartjs-2";
import {
  totalBackcast,
    totalForecast
} from "variables/forecastData.js";
class Tables extends React.Component {
  render() {
    return (
      <>
        <div className="content">
        <Row> 
          <Col md="8">
              <Card className="card-chart">
                <CardHeader>
                <CardTitle tag="h5">Forecast</CardTitle>
                  <p className="card-category">data for 2019 & 2018</p>
                </CardHeader>
                <CardBody>
                  <Line
                   
                    data={totalBackcast.data}
                    options={totalBackcast.options}
                    width={400}
                    height={100}
                    redraw
                  />
                </CardBody>
                
                <CardFooter>
                  <div className="chart-legend">
                    
                    {/* <i className="fa fa-circle text-warning" /> Motivi {" "} */}
                    {/* <i className="fa fa-circle text-info" /> {this.state.name}{" "} */}
                  </div>
                  <hr />
                  {/* <div className="card-stats">
                    <i className="fa fa-check" /> Data information certified
                  </div> */}
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h5">Forecast</CardTitle>
                  <p className="card-category">data for 2020</p>
                </CardHeader>
                <CardBody>
                  <Line
                   
                    data={totalForecast.data}
                    options={totalForecast.options}
                    width={400}
                    height={100}
                    redraw
                  />
                </CardBody>
                
                <CardFooter>
                  <div className="chart-legend">
                    
                    {/* <i className="fa fa-circle text-warning" /> Motivi {" "} */}
                    {/* <i className="fa fa-circle text-info" /> {this.state.name}{" "} */}
                  </div>
                  <hr />
                  {/* <div className="card-stats">
                    <i className="fa fa-check" /> Data information certified
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

export default Tables;
