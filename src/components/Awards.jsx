import awards from "../data/awards";

const Awards = () => {
  const sortedAwards = awards.sort((a, b) => b.award_date - a.award_date);
  return (
    <>
      <h5 className="fw-bold text-highlight">Honors and Awards</h5>
      <ul>
        {sortedAwards.map((award) => (
          <li key={award._id}>
            <span className="award-name fw-bold text-muted me-1">
              {award.award_name}
            </span>

            {award.award_date && award.end_date ? (
              <time className="award-date me-1">{`(${award.award_date.getFullYear()} - ${award.end_date.getFullYear()}):`}</time>
            ) : award.award_date ? (
              <time className="award-date me-1">{`(${award.award_date.getFullYear()}):`}</time>
            ) : null}

            <span className="award-info fw-light">{award.award_info}</span>
            {award.certificate_link ? (
              <a
                href={award.certificate_link}
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

export default Awards;
