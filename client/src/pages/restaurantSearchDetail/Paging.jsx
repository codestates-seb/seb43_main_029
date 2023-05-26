//내부 import

//외부 import
import Pagination from 'react-js-pagination';

/** props를 받는 페이지 네이션 */
const Paging = ({ page, size, totalPosts, totalPages, handlePageChange }) => {
  return (
    <Pagination
      activePage={page} //현재 페이지
      itemsCountPerPage={size} //한 페이지당 보여줄 list item의 개수
      totalItemsCount={totalPosts} //총 아이템의 개수
      pageRangeDisplayed={totalPages} //Paginator 내에서 보여줄 페이지의 범위
      prePageText={'<'} //'이전'을 나타내는 텍스트
      nextPageText={'>'} //'다음'을 나타내는 텍스트
      onChange={handlePageChange} //페이지 바뀔 때 핸들링해주는 함수
    />
  );
};

export default Paging;
