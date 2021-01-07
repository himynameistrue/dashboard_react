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
  totalForecast,
  whiteChecksBackcast,
  whiteChecksForecast,
  whiteSolidBackcast,
  whiteSolidForecast,
  whiteStriperBackcast,
  whiteStriperForecast,

  saddleBrownChecksBackcast,
  saddleBrownChecksForecast,
  saddleBrownSolidBackcast,
  saddleBrownSolidForecast,
  saddleBrownStriperBackcast,
  saddleBrownStriperForecast,

  rosyBrownChecksBackcast,
  rosyBrownChecksForecast,
  rosyBrownSolidBackcast,
  rosyBrownSolidForecast,
  rosyBrownStriperBackcast,
  rosyBrownStriperForecast,


  tistleChecksBackcast,
  tistleChecksForecast,
  tistleSolidBackcast,
  tistleSolidForecast,
  tistleStriperBackcast,
  tistleStriperForecast,

  indianRedChecksBackcast,
  indianRedChecksForecast,
  indianRedSolidBackcast,
  indianRedSolidForecast,
  indianRedStriperBackcast,
  indianRedStriperForecast,

  slateGrayChecksBackcast,
  slateGrayChecksForecast,
  slateGraySolidBackcast,
  slateGraySolidForecast,
  slateGrayStriperBackcast,
  slateGrayStriperForecast,
} from "variables/forecastData.js";

import { Button } from '@material-ui/core';

class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data1: totalBackcast, data2: totalForecast, value1: '', value2: '1' };
    this.loadDate = this.loadDate.bind(this);
  }
  handleChange = (event) => {

    this.setState({ value1: event.target.value })
    // console.log("value1:"+ this.state.value1);
    // this.loadDate(event.target.value);
  }

  handleChange2 = (event) => {

    this.setState({ value2: event.target.value })
    // this.loadDate();
  }

  loadDate() {
    console.log("show Data");
    let value1 = this.state.value1;
    console.log("value1" + value1);
    // let value2=this.state.value2;

    switch (value1) {
      case "7":
        this.setState({ data1: totalBackcast, data2: totalForecast });
        return;
      case "1":
        this.LoadWhite();
        return;
      case "2":
        this.LoadRed();
        return;
      case "3":
        this.LoadRossy();
        return;
      case "4":
        this.LoadThistle();
        return;
      case "5":
        this.LoadGray();
        return;

      case "6":
        this.LoadSaddle();
        return;
    }


  }

  LoadWhite = () => {
    let value2 = this.state.value2;
    console.log("value2:" + value2);
    switch (value2) {

      case '1':
        this.setState({ data1: whiteSolidBackcast, data2: whiteSolidForecast });

        return;
      case '2':
        this.setState({ data1: whiteChecksBackcast, data2: whiteChecksForecast });

        return;
      case '3':
        this.setState({ data1: whiteStriperBackcast, data2: whiteStriperForecast });

        return;
    }



  }
  LoadRed = () => {
    let value2 = this.state.value2;
    switch (value2) {

      case '1':
        this.setState({ data1: indianRedSolidBackcast, data2: indianRedSolidForecast });

        return;
      case '2':
        this.setState({ data1: indianRedChecksBackcast, data2: indianRedChecksForecast });

        return;
      case '3':
        this.setState({ data1: indianRedStriperBackcast, data2: indianRedStriperForecast });

        return;
    }

  }
  LoadGray = () => {
    let value2 = this.state.value2;
    switch (value2) {

      case '1':
        this.setState({ data1: slateGraySolidBackcast, data2: slateGraySolidForecast });

        return;
      case '2':
        this.setState({ data1: slateGrayChecksBackcast, data2: slateGrayChecksForecast });

        return;
      case '3':
        this.setState({ data1: slateGrayStriperBackcast, data2: slateGrayStriperForecast });

        return;
    }

  }
  LoadRossy = () => {
    let value2 = this.state.value2;
    switch (value2) {

      case '1':
        this.setState({ data1: rosyBrownSolidBackcast, data2: rosyBrownSolidForecast });

        return;
      case '2':
        this.setState({ data1: rosyBrownChecksBackcast, data2: rosyBrownChecksForecast });

        return;
      case '3':
        this.setState({ data1: rosyBrownStriperBackcast, data2: rosyBrownStriperForecast });

        return;
    }

  }
  LoadThistle = () => {
    let value2 = this.state.value2;
    switch (value2) {

      case '1':
        this.setState({ data1: tistleSolidBackcast, data2: tistleSolidForecast });

        return;
      case '2':
        this.setState({ data1: tistleChecksBackcast, data2: tistleChecksForecast });

        return;
      case '3':
        this.setState({ data1: tistleStriperBackcast, data2: tistleStriperForecast });

        return;
    }

  }

  LoadSaddle = () => {
    let value2 = this.state.value2;
    switch (value2) {

      case '1':
        this.setState({ data1: saddleBrownSolidBackcast, data2: saddleBrownSolidForecast });

        return;
      case '2':
        this.setState({ data1: saddleBrownChecksBackcast, data2: saddleBrownChecksForecast });

        return;
      case '3':
        this.setState({ data1: saddleBrownStriperBackcast, data2: saddleBrownStriperForecast });

        return;
    }

  }



  render() {
    return (
      <>
        <div className="content">
          <p> </p>
          <p className="card-category">In this section you can find a FORECAST of the quantity to produce!</p>
          <p className="card-category"> The graphs are specified for dress category with cotton fabric</p>
          <p></p>
          <Row>
            <Col lg="3" md="6" sm="6">
              <p>Choose Color</p>
              <div style={{ margin: "6px" }}>
                <select className="browser-default custom-select" onChange={this.handleChange} >
                  <option value="7">Total</option>
                  <option value="1">white</option>
                  <option value="2">indianRed</option>
                  <option value="3">RossyBrown</option>
                  <option value="4">Thistle</option>
                  <option value="5">SlateGray</option>
                  <option value="6">SaddleBrown</option>
                </select>

              </div>
            </Col>

            <Col lg="3" md="6" sm="6">
              <p>Choose Pattern</p>
              <div style={{ margin: "6px" }}>
                <select className="browser-default custom-select" onChange={this.handleChange2} >
                  <option value="1">Solid Color</option>
                  <option value="2">Check</option>
                  <option value="3">Stripper</option>
                </select>

              </div>

            </Col>

            <Col lg="3" md="6" sm="6">
              <p></p>
              <Button variant="contained" color="primary" style={{ margin: "18px" }} onClick={this.loadDate} >
                Show Data
     </Button>
            </Col>
          </Row>
          <Row>
            <Col md="8">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h5">Forecast</CardTitle>
                  <p className="card-category">data for 2019 & 2018</p>
                </CardHeader>
                <CardBody>
                  <Line

                    data={this.state.data1.data}
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

                    data={this.state.data2.data}
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
