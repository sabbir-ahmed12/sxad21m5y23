import PropTypes from "prop-types";
import { Pagination } from "react-bootstrap";
import _ from "lodash";

const PageGroup = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <Pagination className="justify-content-center">
      {pages.map((page) => (
        <Pagination.Item
          className={page === currentPage ? "active" : null}
          key={page}
          onClick={() => onPageChange(page)}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

PageGroup.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default PageGroup;
