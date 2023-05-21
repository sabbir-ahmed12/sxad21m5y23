import { Container, Row, Col, Table } from "react-bootstrap";
import PublicationsList from "../components/PublicationsList";
import AltertBox from "../components/common/AltertBox";
import publications from "../data/publications";

const PublicationsPage = () => {
  const conferencePapers = publications.filter(
    (p) => p.category.toLowerCase() === "conference"
  );
  const journals = publications.filter(
    (p) => p.category.toLowerCase() === "journal"
  );

  return (
    <Container>
      {conferencePapers.length === 0 && journals.length === 0 ? (
        <p className="text-danger">No publications yet!</p>
      ) : (
        <Row className="justify-content-center">
          <Col sm={10} md={10}>
            <AltertBox
              variant="info"
              alertHead={null}
              alertText="Please visit my google scholar profile for up-to-date publication list."
              isDismissable={true}
            />
            <div className="section-heading">
              <h1 className="display-2 text-center my-4 text-custom-heading">
                Publications
              </h1>
            </div>
          </Col>
        </Row>
      )}

      <div className="section-content">
        {conferencePapers && conferencePapers.length > 0 ? (
          <>
            <Row className="justify-content-center">
              <Col sm={10} md={10}>
                <h1 className="display-5 text-center">Conference Papers</h1>
                <hr />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm={10} md={10}>
                <PublicationsList publications={conferencePapers} />
              </Col>
            </Row>
          </>
        ) : null}

        {journals && journals.length > 0 ? (
          <>
            <Row className="justify-content-center">
              <Col sm={10} md={10}>
                <h1 className="display-5 text-center">Journals</h1>
                <hr />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm={10} md={10}>
                <PublicationsList publications={journals} />
              </Col>
            </Row>
          </>
        ) : null}
      </div>
    </Container>
  );
};

export default PublicationsPage;
