import styled from 'styled-components';
// import { useState, useEffect } from 'react';

function FavoritesList() {
  // const [favorites, setFavorites] = useState([]);

  return (
    <FavoritesListBox>
      <FavoritesListContent>
        <FavoritesListElements>
          <FavoritesListElement>
            <a href="/">
              <AddedRestaurantTitle>RRR</AddedRestaurantTitle>
              <AddedRestaurantImg>
                <img
                  src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="img"
                />
              </AddedRestaurantImg>
              <AddedDate>
                <div className="inner"></div>
              </AddedDate>
            </a>
          </FavoritesListElement>
        </FavoritesListElements>
      </FavoritesListContent>
    </FavoritesListBox>
  );
}

const FavoritesListBox = styled.section`
  display: flex;
`;

const FavoritesListContent = styled.div`
  width: 1200px;
`;

const FavoritesListElements = styled.ul`
  display: flex;
`;

const FavoritesListElement = styled.li`
  flex-basis: 25%;
  display: flex;
`;

const AddedRestaurantTitle = styled.h2``;

const AddedRestaurantImg = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`;

const AddedDate = styled.div``;
export default FavoritesList;
