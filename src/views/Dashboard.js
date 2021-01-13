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
import { WordCloud } from "word-cloud-react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
import ReactWordcloud from 'react-wordcloud';
import Badge from 'react-bootstrap/Badge';
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
  MotiviMiroglio,
  MotiviOltreFashion,
  MotiviPerte,
  MotiviTwistFashion,
  
} from "variables/charts.js";

import {   wordMotivi,
  wordElenamiro,
  wordMachka,
  wordTwist, 
  wordMiroglio} from "variables/words.js";
          
        const options = {
          colors: ["#a05163", "#ceaf87", "#8b6638", "#342615", "#000000"],
          enableTooltip: true,
          deterministic: false,
          fontFamily: 'courier',
          fontStyle: "normal",
          fontWeight: "normal",
          padding: 0,
          rotations: 0,
          rotationAngles: [0, 0],
          scale: "sqrt",
          spiral: 'archimedean',
          transitionDuration: 1000,
          fontSizes: [19, 45],
        };

        // const size = [100% , 100%];

class Dashboard extends React.Component {
  datasetKeyProvider(){ return Math.random(); }
  
  constructor(props) {
    super(props);
    this.state = { data : dashboardNASDAQChart.data , name: '', key: 1 , options:
    dashboardNASDAQChart.options , word: wordMotivi , positive:'88%' , negative:'12%' };
  }
  handleChange = (event) => {

  if(event.target.value=="1"){
    console.log(event.target.value);

    this.setState({data: MotiviOltreFashion.data , options: MotiviOltreFashion.options,  key:2
    , name:"Machka" , word:wordMachka , positive:'64%' , negative:'36%'})
  }
  else if(event.target.value=="2"){
    console.log(event.target.value);

      this.setState({data: MotiviMiroglio.data , options: MotiviMiroglio.options, key:3 , name: "Motivi"
      ,word:wordMiroglio , positive:'64%' , negative:'36%'})
    }
  else if(event.target.value=="3"){
    console.log(event.target.value);

        this.setState({data: MotiviTwistFashion.data,  options: MotiviTwistFashion.options, key:4
          , name: "Twist Fashion"  ,word:wordTwist, positive:'85%' , negative:'15%'})
      }
  else if(event.target.value=="4"){
    console.log(event.target.value);

          this.setState({data: MotiviPerte.data,  options: MotiviPerte.options, key:5,
            name: "Elenamiro"  ,word:wordElenamiro , positive:'93%' , negative:'7%'})
      }

    else if(event.target.value=="6"){
      console.log(event.target.value);

      this.setState({data:dashboardNASDAQChart.data , name: '', key:5 ,word:wordMotivi
      , positive:'88%' , negative:'12%'});
  }

  }

  render() {
    return (
      <>
        <div className="content">
        <Row>
          <Col lg="3" md="6" sm="6">
          <p>Choose the Brand : </p>
        <div style={{margin: "6px"}}>
        <select className="browser-default custom-select" onChange={this.handleChange} >
        <option value="6">Brands...</option>
          <option value="2">Motivi</option>
          <option value="1">Machka</option>
          <option value="3">Twist Fashion</option>
          <option value="4">Elenamiro</option>
        </select>
        </div>
        </Col>
        <Col>
        <Card>
          <CardBody>
            <h7> Opinion about your brand based on tweets </h7>
            <p> </p>
          <Badge pill variant="light" style={{fontSize:23, margin: 2, backgroundColor: '#98C1D9'}}>{this.state.positive} Positive Sentiment </Badge> 
          <Badge pill variant="light" style={{fontSize:23, margin: 2, backgroundColor: '#98C1D9'}}>{this.state.negative} Negative Sentiment </Badge> 
                                   
        </CardBody>
      </Card>
      </Col>                
        
      </Row>
      <Row> 
        <Col md="12">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h5">Twitter Trends</CardTitle>
                  <p className="card-category">Here you can find the trend of your popularity on Twitter</p>
                </CardHeader>
                <CardBody>
                  <Line
                   datasetKeyProvider={this.datasetKeyProvider}
                    data={this.state.data}
                    options={this.state.options}
                    width={400}
                    height={100}
                    redraw
                  />
                </CardBody>
                
                <CardFooter>
                  <div className="chart-legend">
                
                    <i className="fa fa-circle " style={{color:"#3D5A80"}}/> Miroglio {" "}
                    <i className="fa fa-circle " style={{color:"#EE6C4D"}} /> {this.state.name}{" "}
                  </div>
                  <hr />
                  <div className="card-stats">
                    <i className="fa fa-check" /> The trend is computed as the number of Twitter posts that mention the brand during the year 2020
                  </div>
                </CardFooter>
        </Card>
        </Col>
        
      </Row>
          <Row>
            <Col md="12">
              <Card> 
              <CardHeader>
                  <CardTitle tag="h5">Terms related to your brand</CardTitle>
                  <hr />
            <div className="card-stats">
              <i className="fa fa-check" /> Here you can find the most popular words in tweets that mention you! Hover the words to see the frequence
            </div>
            <p></p>
                  {/* <p className="card-category">Brand Motivi</p> */}
                </CardHeader>
                 <CardBody>
              <div style={{ width: "100%", height: "100%" }}>
          <ReactWordcloud words={this.state.word} options={options} />

        </div>

       
       </CardBody> 
       
                </Card>
                </Col>
                </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
