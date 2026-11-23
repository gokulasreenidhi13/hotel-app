
// Reusable pagination. It knows nothing about hotels.
// props: page (current page), totalPages, onChange -called with the new page number
function Pagination(props) {
  // nothing to show when there is only one page
  if (props.totalPages <= 1) {
    return null;
  }

  // make a list of page numbers: [1, 2, 3 ...]
  const numbers = [];
  for (let i = 1; i <= props.totalPages; i++) {
    numbers.push(i);
  }

  return (
    <div className="pagination">
      <button
        type="button"
        disabled={props.page === 1}
        onClick={() => props.onChange(props.page - 1)}
      >
        Previous
      </button>

      {numbers.map((n) => (
        <button
          type="button"
          key={n}
          className={n === props.page ? 'active' : ''}
          onClick={() => props.onChange(n)}
        >
          {n}
        </button>
      ))}

      <button
        type="button"
        disabled={props.page === props.totalPages}
        onClick={() => props.onChange(props.page + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
