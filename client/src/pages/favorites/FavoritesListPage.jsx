import styled from 'styled-components';
import FavoritesList from './FavoritesList';

function Favorites() {
  return (
    <FavoritesListPageBox>
      <ContentBox>
        <FavoritesTitle>즐겨찾기 목록</FavoritesTitle>
        <FavoritesList />
      </ContentBox>
    </FavoritesListPageBox>
  );
}

const FavoritesListPageBox = styled.section`
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  a {
    color: #2f3134;
    text-decoration: none;
  }
`;

const ContentBox = styled.div`
  min-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FavoritesTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;
export default Favorites;
