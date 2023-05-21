import { useState } from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import Filter from "./common/Filter";
import allSkills from "../data/skills";

const Skills = () => {
  const [category, setCategory] = useState("programming languages");
  const filterCategories = [...new Set(allSkills.map((s) => s.category))];

  const handleFilter = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const filteredSkills = category
    ? allSkills.filter(
        (s) => s.category.toLowerCase() === category.toLowerCase()
      )
    : allSkills;

  return (
    <Container>
      <div className="section-heading">
        <h1 className="display-2 text-center my-4 text-custom-heading">
          Skills
        </h1>
      </div>

      <div className="section-content">
        <div className="projects-filter text-center mb-3">
          <Filter
            categories={filterCategories}
            selectedCategory={category}
            onCategorySelect={handleFilter}
          />
        </div>

        <Row className="justify-content-center">
          <Col sm={7}>
            {filteredSkills.map((skill) => (
              <article key={skill._id} className="my-3">
                <h5>{skill.name}</h5>
                <ProgressBar variant="success" animated now={skill.level} />
              </article>
            ))}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Skills;
