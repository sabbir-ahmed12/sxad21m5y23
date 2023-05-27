import { Container, Row, Col } from "react-bootstrap";

const VisitorMap = () => {
  return (
    <Container>
      <div className="section-heading">
        <h1 className="display-2 text-center my-4 text-custom-heading">
          Education
        </h1>
      </div>

      <div className="section-content">
        <Row className="justify-content-center my-3">
          <Col sm={8} className="text-center">
            <a href="https://clustrmaps.com/site/1buuw" title="Visit tracker">
              <img src="//clustrmaps.com/map_v2.png?cl=00843d&w=300&t=tt&d=XfPN6nLJI6Q1xG_D-Wze9Tdf4FqJERVIzCFeLO4eOR4&co=ffffff&ct=00843d" />
            </a>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default VisitorMap;
