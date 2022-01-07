import React from "react";

const Pagination = ({ productsPerpage, totalProducts, pagination }) => {
  let pageNumbers = [];


  for (let i = 1; i <= Math.ceil(totalProducts / productsPerpage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className="pagination paginationItems">
        {pageNumbers.map((page) => (

          <div className="page-item" key={page}>
            <li className="page-link" onClick={() => pagination(page)}>
              {page}
            </li>

          </div>
        ))}
      </ul>
    </div>
  );
};
export default Pagination;
