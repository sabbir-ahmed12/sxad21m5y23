import { Container, Row, Col, Figure } from "react-bootstrap";
import AlertBox from "./common/AltertBox";
import photo from "../assets/photo.jpg";

const Hero = () => {
  return (
    <section>
      <Container>
        <div className="section-heading">
          <h1 className="display-2 text-center my-4 text-custom-heading">
            Biography
          </h1>
        </div>

        <div className="section-content">
          <Row className="justify-content-center my-3">
            <Col className="align-self-center text-center" sm={12} md={3}>
              <Figure.Image
                style={{
                  boxShadow: "0.4rem 0.4rem #00843d, -0.4rem -0.4rem #fff",
                }}
                className="rounded"
                src={photo}
                alt="Personal Photo"
                width={200}
                height={220}
              />
            </Col>
            <Col sm={12} md={9}>
              <hr />
              <p className="text-center">
                Electronics and Telecommunication Engineer || Researcher || ML &
                Cybersecurity Enthusiast
              </p>
              <hr />
              <p>
                Hi, Welcome to my personal website. This is{" "}
                <span className="text-highlight">Sabbir Ahmed</span> from{" "}
                <span className="text-highlight">Cumilla, BD</span>. He
                completed Bachelor of Science (B.Sc.) in{" "}
                <span className="text-highlight">
                  Electronics and Telecommunication Engineering (ETE)
                </span>{" "}
                from{" "}
                <span className="text-highlight">
                  Chittagong University of Engineering and Technology (CUET)
                </span>
                , one of the renowned public universities in Bangladesh.
              </p>
              <p>
                I like to explore new technologies, love to learn new things and
                always feel curious about knowing every details what excites me.
                My areas of interest include Machine Learning (ML), Signal
                Processing, Cyber Security, Computer Vision (CV) and Natural
                Language Processing (NLP). My primary research lies in the area
                of speech processing and enthusiastic about multimodal speech
                research. I feel excited about working on problems that would
                provide seamless interaction between intelligent machines and
                humans by combining features from different modalities. I always
                look for an opportunity to work in a team-based environment
                where I can make a direct impact in the field of{" "}
                <span className="text-highlight">
                  signal processing or cyber security or CV or NLP.
                </span>
              </p>
              <p>
                Apart from education activities, I read blogs on programming,
                watch travel blogs, work on hobby projects. I also love
                travelling and exploring new places.
              </p>
              <AlertBox
                variant="warning"
                alertHead="Open to Work:"
                alertText="Looking for a full-time job or research position in the above-mentioned fields."
                isDismissable={false}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
