import { Table } from "react-bootstrap";

const PublicationsList = ({ publications }) => {
  // Sorting publications in descending order of year
  const sortedPublications = publications.sort(
    (a, b) => b.published_date - a.published_date
  );

  return (
    <Table>
      <thead></thead>
      <tbody>
        {sortedPublications.map((paper) => (
          <tr key={paper._id}>
            <td>
              <span className="badge bg-success">{paper.publisher_name}</span>
            </td>
            <td>
              {paper.authors.map((author, id) =>
                author === "Sabbir Ahmed" ? (
                  <span
                    key={id}
                    className="fw-bold text-success me-1"
                  >{`${author},`}</span>
                ) : (
                  <span key={id} className="me-1">{`${author},`}</span>
                )
              )}
              <span className="fw-bold text-muted">{`"${paper.title}"`}</span>
            </td>
            <td className="text-muted fw-light">
              {paper.published_date.getFullYear()}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PublicationsList;
