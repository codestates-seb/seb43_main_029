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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ContentBox = styled.div`
  background-color: red;
  min-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FavoritesTitle = styled.h1``;
export default Favorites;
