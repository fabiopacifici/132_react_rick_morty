export default function AppPagination({ prevUrl, nextUrl, activePage, pages, handlePaginationClick }) {
  return (
    <div className="pagination">


      {/* button to the prev page */}
      {prevUrl && <button className='prev' onClick={handlePaginationClick} data-url={prevUrl} data-action="prev">
        <i className="bi bi-arrow-left-circle-fill"></i>  Prev
      </button>}

      {/* pages counter element active page - total pages */}
      <span className='pages-counter'>
        <span className="active-page">{activePage}</span> of <span>{pages}</span>
      </span>

      {/* button to the next page */}
      {nextUrl && <button className='next' onClick={handlePaginationClick} data-url={nextUrl} data-action="next">
        Next <i className="bi bi-arrow-right-circle-fill"></i>
      </button>}

    </div>
  )
}