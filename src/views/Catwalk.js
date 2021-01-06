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
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Badge from 'react-bootstrap/Badge';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import versace1 from '../assets/img/imgCatwalk/Versace_058_20200925204738.JPG';
import versace2 from '../assets/img/imgCatwalk/Versace_008_20200925204529.JPG';
import versace3 from '../assets/img/imgCatwalk/photo_2021-01-06 18.34.37.jpg';


import balmain1 from '../assets/img/imgCatwalk/Balmain_0009_20201005100640.JPG';
import balmain2 from '../assets/img/imgCatwalk/Balmain_0021_20201005100852.JPG';
import balmain3 from '../assets/img/imgCatwalk/Balmain_0061_20201005101054.JPG';


import gucci1 from '../assets/img/imgCatwalk/LOOK-1E__full-length.jpg';
import gucci2 from '../assets/img/imgCatwalk/00025-Gucci-Resort-2021.jpg';
import gucci3 from '../assets/img/imgCatwalk/00036-Gucci-Resort-2021.jpg';
import gucci4 from '../assets/img/imgCatwalk/00017-Gucci-Resort-2021.jpg';


import fendi1 from '../assets/img/imgCatwalk/Balmain_0009_20201005100640.JPG';
import fendi2 from '../assets/img/imgCatwalk/Balmain_0021_20201005100852.JPG';
import fendi3 from '../assets/img/imgCatwalk/Balmain_0061_20201005101054.JPG';




// reactstrap components
import {
  Button,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

class Catwalk extends React.Component {
  render() {
    return (
    <div className="content">
      <Router>
        <Container>
          <Switch>
            <Route path='/admin/catwalk/versace'>
            <CardDeck>
            <Card>
                <Card.Img variant="top" src={versace1}/>
                  <Card.Body>
                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                      <Tab eventKey="home" title="Color">
                        <div>
                        <p> </p>
                          <Card.Text>Most used colors. </Card.Text>
                          <Badge pill variant="light" style={{fontSize:20, margin: 2, backgroundColor: '#7EC0EE', color: 'white'}}> Cyan Blue </Badge> 
                          <Badge pill variant="light" style={{fontSize:20, margin: 2, backgroundColor: '#1E90FF', color: 'white'}}> Dodger Blue </Badge> 
                          <Badge pill variant="light" style={{fontSize:20, margin: 2,  backgroundColor: '#FFF200'}}> Yellow </Badge> 
                          <Badge pill variant="light" style={{fontSize:20, margin: 2,  backgroundColor: '#FF4500'}}> Orange Red </Badge> 
                          <Badge pill variant="light" style={{fontSize:20, margin: 2,  backgroundColor: '#FF99CD'}}> Pink </Badge> 
                        </div>
                      </Tab>
                      <Tab eventKey="profile" title="Pattern">
                       <div>
                        <p> </p>
                          <Card.Text>Most used pattern. </Card.Text>
                          <Badge pill variant="light" style={{fontSize:20, margin: 2, backgroundColor: '#98C1D9'}}> Sheels and starfish </Badge> 
                          
                        </div>
                      </Tab>
                      <Tab eventKey="contact" title="Fabric">
                        <div>
                        <p> </p>
                          <Card.Text>Most used fabric. </Card.Text>
                          <Badge pill variant="light" style={{fontSize:25, margin: 2, backgroundColor: '#98C1D9'}}> Pleated </Badge> 
                          <Badge pill variant="light" style={{fontSize:25, margin: 2,  backgroundColor: '#98C1D9'}}> Flounces </Badge> 
                        </div>
                      </Tab>
                    </Tabs>
                  </Card.Body>
                </Card>
                <Card>
                <Card.Img variant="top" src={versace2}/>
                  <Card.Body>
                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                      <Tab eventKey="home" title="Color">
                        <div>
                        <p> </p>
                          <Card.Text>Most used colors. </Card.Text>
                          <Badge pill variant="light" style={{fontSize:20, margin: 2, backgroundColor: '#000000', color: 'white'}}> Black </Badge> 
                          <Badge pill variant="light" style={{fontSize:20, margin: 2}}> White </Badge> 
                          <Badge pill variant="light" style={{fontSize:20, margin: 2,  backgroundColor: '#FF4500'}}> Orange Red </Badge> 
                          <Badge pill variant="light" style={{fontSize:20, margin: 2,  backgroundColor: '#7EC0EE'}}> Cyan Blue </Badge> 
                          <Badge pill variant="light" style={{fontSize:20, margin: 2,  backgroundColor: '#32CD32'}}> Green Lime </Badge> 
                        </div>
                      </Tab>
                      <Tab eventKey="profile" title="Pattern">
                       <div>
                        <p> </p>
                          <Card.Text>Most used pattern. </Card.Text>
                          <Badge pill variant="light" style={{fontSize:20, margin: 2, backgroundColor: '#98C1D9'}}> Sheels and starfish </Badge> 
                          <Badge pill variant="light" style={{fontSize:20, margin: 2, backgroundColor: '#98C1D9'}}> Stripes </Badge> 
                          <Badge pill variant="light" style={{fontSize:20, margin: 2, backgroundColor: '#98C1D9'}}> Dotted </Badge> 
                          
                        </div>
                      </Tab>
                      <Tab eventKey="contact" title="Fabric">
                        <div>
                        <p> </p>
                          <Card.Text>Most used fabric. </Card.Text>
                          <Badge pill variant="light" style={{fontSize:25, margin: 2, backgroundColor: '#98C1D9'}}> Cotton Wool </Badge> 
                        </div>
                      </Tab>
                    </Tabs>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src={versace3}/>
                  <Card.Body>
                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                      <Tab eventKey="home" title="Color">
                        <div>
                        <p> </p>
                          <Card.Text>Most used colors. </Card.Text>
                          <Badge pill variant="light" style={{fontSize:20, margin: 2, backgroundColor: '#32CD32'}}> Green Lime </Badge> 
                          <Badge pill variant="light" style={{fontSize:20, margin: 2,  backgroundColor: '#FF8400'}}> Tangerine </Badge> 
                          <Badge pill variant="light" style={{fontSize:20, margin: 2,  backgroundColor: '#FF1100'}}> Red </Badge> 
                        </div>
                      </Tab>
                      <Tab eventKey="profile" title="Pattern">
                       <div>
                        <p> </p>
                          <Card.Text>Most used pattern. </Card.Text>
                          <Badge pill variant="light" style={{fontSize:25, margin: 2, backgroundColor: '#98C1D9'}}> Solid Color </Badge> 
                          
                        </div>
                      </Tab>
                      <Tab eventKey="contact" title="Fabric">
                        <div>
                        <p> </p>
                          <Card.Text>Most used fabric. </Card.Text>
                          <Badge pill variant="light" style={{fontSize:25, margin: 2, backgroundColor: '#98C1D9'}}> Pleated </Badge> 
                          <Badge pill variant="light" style={{fontSize:25, margin: 2,  backgroundColor: '#98C1D9'}}> Flounces </Badge> 
                        </div>
                      </Tab>
                    </Tabs>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Route>
            <Route path='/admin/catwalk/balmain'>
            <CardDeck>
              <Card>
                <Card.Img variant="top" src={balmain1}/>
                  <Card.Body>
                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                      <Tab eventKey="home" title="Color">
                        <div>
                        <p> </p>
                          <Card.Text>Most used colors. </Card.Text>
                          <Badge pill variant="light" style={{fontSize:20, margin: 2, backgroundColor: '#C5E384'}}> Yellow Green </Badge> 
                          <Badge pill variant="light" style={{fontSize:20, margin: 2, backgroundColor: '#C84E8D'}}> Mulberry </Badge> 
                        </div>
                      </Tab>
                      <Tab eventKey="profile" title="Pattern">
                       <div>
                        <p> </p>
                          <Card.Text>Most used pattern. </Card.Text>
                          <Badge pill variant="light" style={{fontSize:25, margin: 2, backgroundColor: '#98C1D9'}}> Solid Color </Badge> 
                          
                        </div>
                      </Tab>
                      <Tab eventKey="contact" title="Fabric">
                        <div>
                        <p> </p>
                          <Card.Text>Most used fabric. </Card.Text>
                          <Badge pill variant="light" style={{fontSize:25, margin: 2, backgroundColor: '#98C1D9'}}> Pleated </Badge> 
                          
                        </div>
                      </Tab>
                    </Tabs>
                  </Card.Body>
                </Card>
              <Card>
                <Card.Img variant="top" src={balmain2}/>
                  <Card.Body>
                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                      <Tab eventKey="home" title="Color">
                        <div>
                        <p> </p>
                          <Card.Text>Most used colors. </Card.Text>
                          <Badge pill variant="light" style={{fontSize:20, margin: 2,  backgroundColor: '#8285A4'}}> Slate Grey </Badge> 
                          <Badge pill variant="light" style={{fontSize:20, margin: 2,  backgroundColor: '#C5E384'}}> Yellow Green </Badge> 
                          
                        </div>
                      </Tab>
                      <Tab eventKey="profile" title="Pattern">
                       <div>
                        <p> </p>
                          <Card.Text>Most used pattern. </Card.Text>
                          <Badge pill variant="light" style={{fontSize:25, margin: 2, backgroundColor: '#98C1D9'}}> Solid Color </Badge> 
                          
                        </div>
                      </Tab>
                      <Tab eventKey="contact" title="Fabric">
                        <div>
                        <p> </p>
                          <Card.Text>Most used fabric. </Card.Text>
                          <Badge pill variant="light" style={{fontSize:25, margin: 2, backgroundColor: '#98C1D9'}}> Cotton Wool </Badge> 
                        </div>
                      </Tab>
                    </Tabs>
                  </Card.Body>
                </Card>
              <Card>
                  <Card.Img variant="top" src={balmain3}/>
                  <Card.Body>
                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                      <Tab eventKey="home" title="Color">
                        <div>
                        <p> </p>
                          <Card.Text>Most used colors. </Card.Text>
                          <Badge pill variant="light" style={{fontSize:25, margin: 2, backgroundColor: '#000000', color:'white'}}> Black </Badge> 
                          <Badge pill variant="light" style={{fontSize:25, margin: 2}}> White </Badge> 
                         
                        </div>
                      </Tab>
                      <Tab eventKey="profile" title="Pattern">
                       <div>
                        <p> </p>
                          <Card.Text>Most used pattern. </Card.Text>
                          <Badge pill variant="light" style={{fontSize:25, margin: 2, backgroundColor: '#98C1D9'}}> Geometric Logo </Badge> 
                          
                        </div>
                      </Tab>
                      <Tab eventKey="contact" title="Fabric">
                        <div>
                        <p> </p>
                          <Card.Text>Most used fabric. </Card.Text>
                          <Badge pill variant="light" style={{fontSize:25, margin: 2, backgroundColor: '#98C1D9'}}> Cotton Wool </Badge> 
                          
                        </div>
                      </Tab>
                    </Tabs>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Route>
            <Route path='/admin/catwalk/gucci'>
            <CardDeck>
              <Card>
                <Card.Img variant="top" src={gucci1}/>
                  <Card.Body>
                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                      <Tab eventKey="home" title="Color">
                        <div>
                        <p> </p>
                          <Card.Text>Most used colors. </Card.Text>
                          <Badge pill variant="light" style={{fontSize:20, margin: 2, backgroundColor: '#932F3E' , color:'white'}}> Pink red </Badge> 
                          <Badge pill variant="light" style={{fontSize:20, margin: 2, backgroundColor: '#808080' , color:'white'}}> Gray </Badge> 
                          <Badge pill variant="light" style={{fontSize:20, margin: 2, backgroundColor: '#96CBC1'}}> Medium Blue Green </Badge> 
                          <Badge pill variant="light" style={{fontSize:20, margin: 2, backgroundColor: '#373054' , color:'white'}}> Blue Magenta </Badge> 
                          <Badge pill variant="light" style={{fontSize:20, margin: 2, backgroundColor: '#000000', color:'white'}}> Black </Badge> 
                        </div>
                      </Tab>
                      <Tab eventKey="profile" title="Pattern">
                       <div>
                        <p> </p>
                          <Card.Text>Most used pattern. </Card.Text>
                          <Badge pill variant="light" style={{fontSize:20, margin: 2, backgroundColor: '#98C1D9'}}> Checks </Badge> 
                          <Badge pill variant="light" style={{fontSize:20, margin: 2, backgroundColor: '#98C1D9'}}> Geometric Logo </Badge> 
                          
                        </div>
                      </Tab>
                      <Tab eventKey="contact" title="Fabric">
                        <div>
                        <p> </p>
                          <Card.Text>Most used fabric. </Card.Text>
                          <Badge pill variant="light" style={{fontSize:25, margin: 2, backgroundColor: '#98C1D9'}}> Cotton Wool </Badge> 
                          
                        </div>
                      </Tab>
                    </Tabs>
                  </Card.Body>
                </Card>
              <Card>
                <Card.Img variant="top" src={gucci2}/>
                  <Card.Body>
                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                      <Tab eventKey="home" title="Color">
                        <div>
                        <p> </p>
                          <Card.Text>Most used colors. </Card.Text>
                          <Badge pill variant="light" style={{fontSize:20, margin: 2,  backgroundColor: '#15BCD4'}}> Pacific Blue </Badge> 
                          <Badge pill variant="light" style={{fontSize:20, margin: 2,  backgroundColor: '#FBDCEB'}}> Mimi Pink </Badge> 
                          <Badge pill variant="light" style={{fontSize:20, margin: 2}}> White </Badge> 
                          <Badge pill variant="light" style={{fontSize:20, margin: 2,  backgroundColor: '#F4618D'}}> Violet Red </Badge> 
                          <Badge pill variant="light" style={{fontSize:20, margin: 2,  backgroundColor: '#F0B047'}}> Honey Gold </Badge> 
                          
                        </div>
                      </Tab>
                      <Tab eventKey="profile" title="Pattern">
                       <div>
                        <p> </p>
                          <Card.Text>Most used pattern. </Card.Text>
                          <Badge pill variant="light" style={{fontSize:25, margin: 2, backgroundColor: '#98C1D9'}}> Geometric </Badge> 
                          <Badge pill variant="light" style={{fontSize:25, margin: 2, backgroundColor: '#98C1D9'}}> Floral </Badge> 
                          
                        </div>
                      </Tab>
                      <Tab eventKey="contact" title="Fabric">
                        <div>
                        <p> </p>
                          <Card.Text>Most used fabric. </Card.Text>
                          <Badge pill variant="light" style={{fontSize:25, margin: 2, backgroundColor: '#98C1D9'}}> Cotton Wool </Badge> 
                        </div>
                      </Tab>
                    </Tabs>
                  </Card.Body>
                </Card>
              <Card>
                  <Card.Img variant="top" src={gucci3}/>
                  <Card.Body>
                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                      <Tab eventKey="home" title="Color">
                        <div>
                        <p> </p>
                          <Card.Text>Most used colors. </Card.Text>
                          <Badge pill variant="light" style={{fontSize:20, margin: 2, backgroundColor: '#FFFDD0'}}> Ivory </Badge> 
                          <Badge pill variant="light" style={{fontSize:20, margin: 2, backgroundColor: '#0172B3', color:'white'}}> French Blue </Badge> 
                          <Badge pill variant="light" style={{fontSize:20, margin: 2, backgroundColor: '#FF4500', }}> Orange Red </Badge> 
                          <Badge pill variant="light" style={{fontSize:20, margin: 2, backgroundColor: '#F3C6B3', }}> Apricot </Badge> 
                          
                        </div>
                      </Tab>
                      <Tab eventKey="profile" title="Pattern">
                       <div>
                        <p> </p>
                          <Card.Text>Most used pattern. </Card.Text>
                          <Badge pill variant="light" style={{fontSize:25, margin: 2, backgroundColor: '#98C1D9'}}> Floral </Badge> 
                          
                        </div>
                      </Tab>
                      <Tab eventKey="contact" title="Fabric">
                        <div>
                        <p> </p>
                          <Card.Text>Most used fabric. </Card.Text>
                          <Badge pill variant="light" style={{fontSize:25, margin: 2, backgroundColor: '#98C1D9'}}> Cotton Wool </Badge> 
                          <Badge pill variant="light" style={{fontSize:25, margin: 2, backgroundColor: '#98C1D9'}}> Lace </Badge> 
                          
                        </div>
                      </Tab>
                    </Tabs>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Route>
          </Switch>

        </Container>
      </Router>
      </div>
    );
  }
}

export default Catwalk;
