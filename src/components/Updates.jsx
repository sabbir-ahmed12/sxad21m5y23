import { Container, Row, Col } from "react-bootstrap";
import TimeStamp from "./common/TimeStamp";
import updates from "../data/updates";

const Updates = () => {
  const sortedUpdates = updates.sort((a, b) => b.date - a.date).slice(0, 8);

  return (
    <section>
      <Container>
        <div className="section-heading">
          <h1 className="display-2 text-center my-4 text-custom-heading">
            Updates
          </h1>
        </div>

        <div
          className="section-content"
          style={{ maxHeight: "45vh", overflowY: "auto" }}
        >
          {sortedUpdates.map((updateItem) => (
            <Row key={updateItem._id} className="justify-content-center m-2">
              <Col md={7} className="bg-custom-dark rounded">
                <div className="align-self-center py-2">
                  <TimeStamp date={updateItem.date} />
                  <span className="text-light fw-light">{updateItem.info}</span>
                </div>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Updates;
