import { Container, Row, Col } from "react-bootstrap";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <Container>
      <div className="section-heading">
        <h1 className="display-2 text-center my-4 text-custom-heading">
          Contact
        </h1>
      </div>
      <div className="section-content">
        <Row className="justify-content-center my-3">
          <Col sm={8} className="text-center">
            <div
              className="p-3 rounded"
              style={{
                boxShadow: "0.2rem 0.2rem #00843d, -0.2rem -0.2rem #fff",
              }}
            >
              <h6>Like What You See?</h6>
              <h5>I'd love to hear from you!</h5>
              <p className="text-highlight">
                <MdEmail size={20} className="me-2" />
                sabbir.ahmed8012@gmail.com
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Contact;
