import { Container, Row, Col } from "react-bootstrap";
import AlertBox from "../components/common/AltertBox";
import experiences from "../data/experiences";

const ExperiencePage = () => {
  const sortedExperiences = experiences.sort((a, b) => b.end_date - a.end_date);

  return (
    <Container>
      <div className="section-heading">
        <h1 className="display-2 text-center my-4 text-custom-heading">
          Experience
        </h1>
      </div>

      {experiences && experiences.length === 0 ? (
        <AlertBox
          variant="info"
          alertText="No experiences to be displayed yet."
        />
      ) : (
        <div className="section-content">
          {sortedExperiences.map((experience) => (
            <Row key={experience._id} className="justify-content-center my-3">
              <Col sm={12} md={8}>
                <article
                  className="p-3 rounded justify-content-between"
                  style={{
                    boxShadow: "0.2rem 0.2rem #00843d, -0.2rem -0.2rem #fff",
                  }}
                >
                  <div className="d-flex justify-content-between">
                    <h4 className="fw-bold">{experience.employer_name}</h4>
                    <span className="fw-light fst-italic">
                      {experience.location}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="text-muted font-monospace">
                      {experience.position}
                    </h6>
                    <time className="fw-light badge rounded bg-success">
                      {`${experience.start_date.getFullYear()} - ${experience.end_date.getFullYear()}`}
                    </time>
                  </div>
                  <hr />
                  <div>
                    <h6 className="fw-bold">Responsibilities:</h6>
                    <ul>
                      {experience.responsibilities.map((responsibility, id) => (
                        <li key={id}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="d-flex">
                    <h6 className="fw-bold">Tools Used:</h6>
                    {experience.tools_used.map((tool, id) => (
                      <span
                        key={id}
                        className="fw-light badge rounded-pill bg-success m-1"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </article>
              </Col>
            </Row>
          ))}
        </div>
      )}
    </Container>
  );
};

export default ExperiencePage;
