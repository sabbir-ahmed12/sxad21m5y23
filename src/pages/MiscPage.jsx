import { Container, Row, Col } from "react-bootstrap";
import Certifications from "../components/Certifications";
import Awards from "../components/Awards";
import Cocurriculur from "../components/Cocurriculur";
import Affiliations from "../components/Affiliations";
import StandardizedTests from "../components/StandardizedTests";
import Quotes from "../components/Quotes";
import useGlobeWidget from "../hooks/useGlobeWidget";

const MiscPage = () => {
  return (
    <section>
      <Container>
        <div className="section-heading">
          <h1 className="display-2 text-center my-4 text-custom-heading">
            Miscellaneous
          </h1>
        </div>
        <div className="section-content">
          <Row className="justify-content-center my-2">
            <Col sm={10} className="text-center">
              <h1 className="display-5 text-center">MOOC Certifications</h1>
              <hr />
              <Certifications />
            </Col>
          </Row>
          <Row className="justify-content-center my-5">
            <Col sm={10}>
              <h1 className="display-5 text-center">Achievements</h1>
              <hr />
              <Awards />
              <Cocurriculur />
            </Col>
          </Row>
          <Row className="justify-content-center my-2">
            <Col sm={10}>
              <h1 className="display-5 text-center">Affiliations</h1>
              <hr />
              <Affiliations />
            </Col>
          </Row>

          <Row className="justify-content-center my-2">
            <Col sm={10}>
              <h1 className="display-5 text-center">Standardized Tests</h1>
              <hr />
              <StandardizedTests />
            </Col>
          </Row>
          <Row className="justify-content-center my-2">
            <Col sm={10} className="text-center">
              <h1 className="display-5 text-center">Favorite Quotes</h1>
              <hr />
              <Quotes />
            </Col>
          </Row>
          <Row className="justify-content-center my-2">
            <Col sm={10} className="text-center">
              useGlobeWidget("//clustrmaps.com/globe.js?d=XfPN6nLJI6Q1xG_D-Wze9Tdf4FqJERVIzCFeLO4eOR4")
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default MiscPage;
