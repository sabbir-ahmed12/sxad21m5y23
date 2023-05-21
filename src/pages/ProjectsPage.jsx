import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Filter from "../components/common/Filter";
import PageGroup from "../components/common/PageGroup";
import allProjects from "../data/projects";
import { paginate } from "../utils/paginate";
import SearchBar from "../components/common/SearchBar";

const ProjectsPage = () => {
  const [category, setCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const pageSize = 5;

  // Get unique categories to build filter
  const filterCategories = [
    "all",
    ...new Set(allProjects.map((c) => c.category)),
  ];

  // Perform filtering operation
  const handleProjectSelect = (selectedCategory) => {
    setCategory(selectedCategory);
    setSearchQuery("");
    // Resetting the current page to 1.
    setCurrentPage(1);
  };

  // Pagination function
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Search Functionality
  const handleSearch = (query) => {
    setSearchQuery(query);
    setCategory("all");
    setCurrentPage(1);
  };

  let filteredProjects = allProjects;

  if (searchQuery) {
    filteredProjects = allProjects.filter((p) =>
      p.title.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
  } else if (category !== "all") {
    filteredProjects = allProjects.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  const itemsCount = filteredProjects.length;
  filteredProjects = paginate(filteredProjects, currentPage, pageSize);

  return (
    <Container>
      <div className="section-heading">
        <h1 className="display-2 text-center my-4 text-custom-heading">
          Projects
        </h1>
      </div>

      <div className="section-content">
        <div className="projects-filter text-center mb-3">
          <Filter
            categories={filterCategories}
            selectedCategory={category}
            onCategorySelect={handleProjectSelect}
          />
        </div>

        <SearchBar value={searchQuery} onChange={handleSearch} />

        {filteredProjects.map((project) => (
          <Row key={project._id} className="justify-content-center">
            <Col sm={12} md={8}>
              <article
                className="p-3 rounded justify-content-between my-2"
                style={{
                  boxShadow: "0.2rem 0.2rem #00843d, -0.2rem -0.2rem #fff",
                }}
              >
                <div>
                  <h5 className="font-monospace fw-bold">{project.title}</h5>
                  <span className="fw-bold text-muted fst-italic me-1">
                    Description:
                  </span>
                  <span className="text-muted text-light fst-italic">
                    {project.description}
                  </span>
                  <br />
                  {project.live_link && (
                    <span className="badge bg-success m-1">
                      <a
                        target="_blank"
                        className="text-decoration-none"
                        href={project.live_link}
                      >
                        Live Demo
                      </a>
                    </span>
                  )}
                  {project.github_link && (
                    <span className="badge bg-success m-1">
                      <a
                        target="_blank"
                        className="text-decoration-none"
                        href={project.github_link}
                      >
                        Github Link
                      </a>
                    </span>
                  )}
                </div>

                <hr />

                <div className="d-flex">
                  <h6 className="fw-bold">Tools Used:</h6>
                  {project.tools_used.map((tool, id) => (
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
      <div className="my-5">
        <PageGroup
          itemsCount={itemsCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </Container>
  );
};

export default ProjectsPage;
