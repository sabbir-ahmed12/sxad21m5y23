import { Container, Row, Col } from "react-bootstrap";
import education from "../data/education";

const Education = () => {
  const sortedEducation = education.sort(
    (a, b) => b.completion_year - a.completion_year
  );

  return (
    <section>
      <Container>
        <div className="section-heading">
          <h1 className="display-2 text-center my-4 text-custom-heading">
            Education
          </h1>
        </div>

        <div className="section-content">
          {sortedEducation.map((education) => (
            <Row key={education._id} className="justify-content-center my-3">
              <Col sm={8} className="text-center">
                <div
                  className="p-3 rounded"
                  style={{
                    boxShadow: "0.2rem 0.2rem #00843d, -0.2rem -0.2rem #fff",
                  }}
                >
                  <h3>{education.degree_name}</h3>
                  <h6>{education.institution_name}</h6>
                  <time>
                    {`${education.starting_year.getFullYear()} -
                      ${education.completion_year.getFullYear()}`}
                  </time>
                </div>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Education;
