import React from 'react';
import { Button, Container, Row, Col } from "reactstrap";

import Header from '../components/Header/Header';
import NavBar from '../components/Header/NavBar';
import Footer from '../components/Footer/Footer'

class Home extends React.Component {

  render() {
    return (
      <div className="section">
        <NavBar />
        <Header />
        <Container style={{ 'margin-bottom': '8rem', 'margin-top': '6rem' }}>
          <Row>
            <Col lg="8" md="12">
              <h2 className="title">Make your projects come alive with the help of others</h2>
            </Col>
          </Row>
          <Row style={{ 'margin-bottom': "3rem" }}>
            <Col lg="6" md="12">
              <h4 style={{ color: "black" }}>Publish your idea</h4>
              <br />
              <p className="description">
                Paper Kit comes with 100 custom icons made by our friends from
                NucleoApp. The official package contains over 2.100 thin icons
                which are looking great in combination with Paper Kit Make sure
                you check all of them and use those that you like the most.
              </p>
              <br />
            </Col>
            <Col lg="6" md="12">
              <h4 style={{ color: "black" }}>Connect with your dream team</h4>
              <br />
              <p className="description">
                Paper Kit comes with 100 custom icons made by our friends from
                NucleoApp. The official package contains over 2.100 thin icons
                which are looking great in combination with Paper Kit Make sure
                you check all of them and use those that you like the most.
              </p>
              <br />
            </Col>
          </Row>
          <Row style={{ 'margin-bottom': "3rem" }}>
            <Col lg="6" md="12">
              <h4 style={{ color: "black" }}>Find project funders</h4>
              <br />
              <p className="description">
                Paper Kit comes with 100 custom icons made by our friends from
                NucleoApp. The official package contains over 2.100 thin icons
                which are looking great in combination with Paper Kit Make sure
                you check all of them and use those that you like the most.
              </p>
              <br />
            </Col>
            <Col lg="6" md="12">
              <h4 style={{ color: "black" }}>Get advice from the crowd</h4>
              <br />
              <p className="description">
                Paper Kit comes with 100 custom icons made by our friends from
                NucleoApp. The official package contains over 2.100 thin icons
                which are looking great in combination with Paper Kit Make sure
                you check all of them and use those that you like the most.
              </p>
              <br />
            </Col>
          </Row>
          <Row>
            <Col style={{ 'text-align': 'center' }}>
              <Button
                className="btn-round ml-1"
                color="danger"
                href="https://nucleoapp.com/?ref=1712"
                outline
                target="_blank"
                size="lg"
              >
                Post a project
              </Button>
            </Col>
            <Col style={{ 'text-align': 'center' }}>
              <Button
                className="btn-round ml-1"
                color="danger"
                href="https://nucleoapp.com/?ref=1712"
                outline
                target="_blank"
                size="lg"
              >
                View projects
              </Button>
            </Col>
          </Row>
        </Container>
        {/* featured this week */}
        <div className="section section-dark section-nucleo-icons">
          <Container>
            <Row>
              <Col lg="6" md="12">
                <h2 className="title">Nucleo Icons</h2>
                <br />
                <p className="description">
                  Paper Kit comes with 100 custom icons made by our friends from
                  NucleoApp. The official package contains over 2.100 thin icons
                  which are looking great in combination with Paper Kit Make sure
                  you check all of them and use those that you like the most.
                </p>
                <br />
                <Button
                  className="btn-round"
                  color="danger"
                  href="/nucleo-icons"
                  target="_blank"
                >
                  View Demo Icons
                </Button>
                <Button
                  className="btn-round ml-1"
                  color="danger"
                  href="https://nucleoapp.com/?ref=1712"
                  outline
                  target="_blank"
                >
                  View All Icons
                </Button>
              </Col>
              <Col lg="6" md="12">
                <div className="icons-container">
                  <i className="nc-icon nc-time-alarm" />
                  <i className="nc-icon nc-atom" />
                  <i className="nc-icon nc-camera-compact" />
                  <i className="nc-icon nc-watch-time" />
                  <i className="nc-icon nc-key-25" />
                  <i className="nc-icon nc-diamond" />
                  <i className="nc-icon nc-user-run" />
                  <i className="nc-icon nc-layout-11" />
                  <i className="nc-icon nc-badge" />
                  <i className="nc-icon nc-bulb-63" />
                  <i className="nc-icon nc-favourite-28" />
                  <i className="nc-icon nc-planet" />
                  <i className="nc-icon nc-tie-bow" />
                  <i className="nc-icon nc-zoom-split" />
                  <i className="nc-icon nc-cloud-download-93" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        < Footer />
      </div>

    )
  }
}

export default Home;