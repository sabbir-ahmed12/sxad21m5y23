import { Row, Col } from "react-bootstrap";
import affiliations from "../data/affiliations";

const Affiliations = () => {
  const sortedItems = affiliations.sort((a, b) => b.end_date - a.end_date);

  return (
    <section>
      {sortedItems.map((affiliation) => (
        <Row key={affiliation._id} className="justify-content-center my-3">
          <Col sm={12} md={10}>
            <article
              className="p-3 rounded justify-content-between"
              style={{
                boxShadow: "0.2rem 0.2rem #00843d, -0.2rem -0.2rem #fff",
              }}
            >
              <div className="d-flex justify-content-between">
                <h4 className="fw-bold">{affiliation.organization_name}</h4>
                <span className="fw-light fst-italic">
                  {affiliation.location}
                </span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="text-muted font-monospace">
                  {affiliation.position}
                </h6>
                <time className="fw-light badge rounded bg-success">
                  {`${affiliation.start_date.getFullYear()} - ${affiliation.end_date.getFullYear()}`}
                </time>
              </div>
              <hr />
              <div>
                <h6 className="fw-bold">Responsibilities:</h6>
                <ul>
                  {affiliation.responsibilities.map((responsibility, id) => (
                    <li key={id}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </article>
          </Col>
        </Row>
      ))}
    </section>
  );
};

export default Affiliations;
