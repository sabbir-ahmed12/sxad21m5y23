import cocurriculars from "../data/cocurriculars";

const Cocurriculur = () => {
  const sortedCocurriculars = cocurriculars.sort(
    (a, b) => b.award_date - a.award_date
  );
  return (
    <>
      <h5 className="fw-bold text-highlight">Co-Curricular Activities</h5>
      <ul>
        {sortedCocurriculars.map((award) => (
          <li key={award._id}>
            {award.award_name ? (
              <span className="award-name fw-bold text-muted me-1">
                {award.award_name}
              </span>
            ) : null}

            {award.award_date && award.end_date ? (
              <time className="award-date me-1">{`(${award.award_date.getFullYear()} - ${award.end_date.getFullYear()}):`}</time>
            ) : award.award_date ? (
              <time className="award-date me-1">{`(${award.award_date.getFullYear()}):`}</time>
            ) : null}

            <span className="award-info fw-light">{award.award_info}</span>
            {award.certificate_link ? (
              <a
                href={award.certificate_link}
                target="_blank"
                className="badge rounded bg-success text-decoration-none ms-1"
              >
                View
              </a>
            ) : null}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cocurriculur;
