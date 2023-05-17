import Pagination from 'react-js-pagination';
import './PagingStyle.css';

const Paging = ({ page, count, itemPerPage, setPage }) => {
  return (
    <Pagination
      activePage={page}
      itemsCounterPerPage={itemPerPage}
      totalItemsCount={count}
      pageRangeDisplayed={5}
      prevPageText={'<'}
      nextPageText={'>'}
      onChange={setPage}
    />
  );
};

export default Paging;
