import { Form, Container, Row, Col } from "react-bootstrap";

const SearchBar = ({ value, onChange }) => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm={12} md={6} className="my-2">
          <Form.Control
            value={value}
            placeholder="Search..."
            onChange={(e) => onChange(e.currentTarget.value)}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;
