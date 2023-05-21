//내부
import SearchInfo from './SearchInfo';
import SearchList from './SearchList';

//외부 import
import styled from 'styled-components';

const RestaurantSearchDetail = () => {
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

export default RestaurantSearchDetail;

//style
const RestaurantSearchDetailContainer = styled.main``;

const ArticleBox = styled.article`
  padding-top: 50px;
`;

const ContentBox = styled.section`
  max-width: 1000px;
  height: 1000px;

  border: 1px solid #000;
  margin: auto;
`;
