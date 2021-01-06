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
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import versace1 from '../assets/img/imgCatwalk/Versace_058_20200925204738.JPG';
import versace2 from '../assets/img/imgCatwalk/Versace_023_20200925204438.JPG';
import versace3 from '../assets/img/imgCatwalk/Versace_008_20200925204529.JPG';


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
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in to
                      additional content. This content is a little bit longer.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src={versace2}/>
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in to additional
                      content.{' '}
                      </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src={versace3}/>
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in to
                      additional content. This card has even longer content than the first to
                      show that equal height action.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Footer>
                </Card>
              </CardDeck>
            </Route>
            <Route path='/admin/catwalk/balmain'>
              <Row>
               </Row>
            </Route>
            <Route path='/admin/catwalk/gucci'>
              <Row>
              </Row>
            </Route>
            

          </Switch>

        </Container>
      </Router>
      </div>
    );
  }
}

export default Catwalk;
