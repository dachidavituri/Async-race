import "./WinnerPagination.css";
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  paginateNext: () => void;
  paginatePrev: () => void;
}

const WinnerPagination = ({
  currentPage,
  totalPages,
  paginateNext,
  paginatePrev,
}: PaginationProps) => {
  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <button onClick={paginatePrev} className="page-link">
            Previous
          </button>
        </li>
        <h2>{currentPage}</h2>
        <li className="page-item">
          <button onClick={paginateNext} className="page-link">
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default WinnerPagination;
