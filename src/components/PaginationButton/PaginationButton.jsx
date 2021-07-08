import React from 'react';
import PropTypes from 'prop-types';

export const PaginationButton = ({ simbol, page, onPageChange }) => (
  <button
    type="button"
    className="pagination__link"
    onClick={(event) => {
      event.preventDefault();

      onPageChange(+page);
    }}
  >
    {simbol || page}
  </button>
);

PaginationButton.propTypes = {
  simbol: PropTypes.string,
  page: PropTypes.string.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

PaginationButton.defaultProps = {
  simbol: '',
};