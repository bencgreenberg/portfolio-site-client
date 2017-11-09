import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

class Home extends React.Component {

  componentDidMount() {
    if (window.location.search) {
      let company = decodeURI(window.location.search.split("=")[1])
      setTimeout(function(){ alert("Hi " + company + "!\n\nWelcome to Ben's website!\n\nI'm so glad you're here. Feel free to take a look at his projects and his recent blog posts. I look forward to hearing what you think, but since I'm just a piece of Javascript code I don't really have lots of opinions. I know however that Ben would love to hear from you.\n\nEnjoy your visit!"); }, 1500);
    }
  }

  render() {

    return (
      <div className="container">
        <Grid fluid={true}>

          <Row className="show-grid">
            <div className="content">
                <Col lg={6} md={6}>
                  <br /><br />
                  <img src="/bg-header-img.jpg" width="70%" alt="Ben Greenberg" />
                </Col>
            </div>

              <Col lg={6} md={6}>
                <br /><br /><br /><br />
                <p id="page-title">Welcome!</p>
                <div id="index-content">
                  <p>I have worked for nearly 10 years as a communal rabbi, non-profit professional and community organizer. During the past decade I've served communities and organizations in Boston, Denver, Chicago and New York. Throughout my non-profit career I've been fortunate to work closely with college students on campus, organize for a better society, teach adult education and create and lead new departments and teams.</p>
                  <br />
                  <p>After a decade of communal service, I've decided to shift my focus back to the tech sector. During the 1990s I co-founded and co-directed a San Diego, CA based computer security firm and co-founded Southern California's largest computer security conference. I've returned to my tech roots as a recent graduate of the online immersive full stack web development program at the Flatiron School.</p>
                  <br />
                  <p>Please browse my coding portfolio and take a look at my blog posts, both my tech articles and my posts about society, non-profit leadership and Jewish communal life written over the years.</p>
                  <br />
                  <p>I look forward to being in touch!</p>
                  <p id="signature">Ben Greenberg</p>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      );
    }
  }

export default Home;
