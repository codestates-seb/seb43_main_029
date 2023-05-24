//내부
import SearchInfo from './SearchInfo';
import SearchList from './SearchList';
// import Paging from './Paging';
import { fetchSearchRestaurant } from '../../redux/search/actions';

//외부 import
import styled from 'styled-components';
import { useEffect } from 'react';
import { connect } from 'react-redux';
// import { useParams } from 'react-router-dom';

/** 서버주소/restaurant/search에서 데이터 불러오기 */
const RestaurantSearchDetail = ({ fetchSearchRestaurant, currentPosts }) => {
  useEffect(() => {
    fetchSearchRestaurant();
  }, []);
  console.log(currentPosts, 'currentPosts');

  // let posts = useSelector(state => state.search.restaurants.pageInfo);
  // console.log(posts, 'posts');
  return (
    <RestaurantSearchDetailContainer>
      <ArticleBox>
        <ContentBox>
          <SearchInfo />
          <SearchList />
        </ContentBox>
      </ArticleBox>
    </RestaurantSearchDetailContainer>
  );
};
const mapStateToProps = state => {
  const loading = state.search.loading;
  return {
    loading: loading,
    currentPosts: state.search.restaurants.data,
  };
};
export default connect(mapStateToProps, { fetchSearchRestaurant })(RestaurantSearchDetail);

//style
const RestaurantSearchDetailContainer = styled.main``;

const ArticleBox = styled.article`
  padding-top: 50px;
`;

const ContentBox = styled.section`
  max-width: 1000px;
  min-height: 1000px;

  border: 1px solid #000;
  margin: auto;
`;
