import { Row, Col } from "react-bootstrap";
import tests from "../data/tests";

const StandardizedTests = () => {
  const sortedTests = tests.sort((a, b) => b.date_taken - a.date_taken);
  return (
    <section>
      <ul>
        {sortedTests.map((test) => (
          <li key={test._id} className="mb-2">
            <div className="d-flex justify-content-between">
              <span className="fw-bold text-muted">{test.test_name}</span>
              <span className="fw-light fst-italic">{test.test_location} </span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span className="fw-light">{test.score}</span>
              <time className="badge bg-success">
                {`${test.date_taken.getDate()}/${test.date_taken.getMonth()}/${test.date_taken.getFullYear()}`}
              </time>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default StandardizedTests;
