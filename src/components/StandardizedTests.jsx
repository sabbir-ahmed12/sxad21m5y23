import { Fragment } from "react";
import { Table } from "react-bootstrap";
import { SiTestcafe } from "react-icons/si";
import tests from "../data/tests";

const StandardizedTests = () => {
  const sortedTests = tests.sort((a, b) => b.date_taken - a.date_taken);
  return (
    <section>
      <Table size="sm" borderless>
        <thead></thead>
        <tbody>
          {sortedTests.map((test) => (
            <Fragment key={test._id}>
              <tr>
                <td>
                  <SiTestcafe size={25} className="text-success" />
                </td>
                <td className="fw-bold text-muted">{test.test_name}</td>
                <td className="fw-light fst-italic">{test.test_location}</td>
              </tr>
              <tr>
                <td></td>
                <td className="fw-light">{test.score}</td>
                <td>
                  <time className="badge bg-success">{`${test.date_taken.getDate()}/${test.date_taken.getMonth()}/${test.date_taken.getFullYear()}`}</time>
                </td>
              </tr>
            </Fragment>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default StandardizedTests;
