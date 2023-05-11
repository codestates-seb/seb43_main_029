import styled from 'styled-components';

function Favorites() {
  return (
    <FavoritesListPageBox>
      <ContentBox></ContentBox>
    </FavoritesListPageBox>
  );
}

const FavoritesListPageBox = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentBox = styled.div``;
export default Favorites;
