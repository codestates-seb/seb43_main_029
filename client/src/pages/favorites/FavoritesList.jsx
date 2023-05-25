import styled from 'styled-components';
import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { BookmarkComponent } from '../../components/Bookmark';
import Paging from './Pagination';

function FavoritesList() {
  const [favorites, setFavorites] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 12;

  const [indexOfLastItem, setIndexOfLastItem] = useState(0);
  const [indexOfFirstItem, setIndexOfFirstItem] = useState(0);
  const [currentItems, setCurrentItems] = useState(0);

  const userInfo = useSelector(state => state.userinfo.user);
  const memberId = userInfo.memberId;

  const accessToken = useSelector(state => state.Auth.token);
  const config = {
    headers: {
      Authorization: `${accessToken}`,
    },
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/members/${memberId}/bookmark`, config).then(res => {
      setFavorites(res.data.data);
    });
  }, [memberId]);

  useEffect(() => {
    setCount(favorites.length);
    setIndexOfLastItem(currentPage * itemPerPage);
    setIndexOfFirstItem(indexOfLastItem - itemPerPage);
    setCurrentItems(favorites.slice(indexOfFirstItem, indexOfLastItem));
  }, [currentPage, indexOfFirstItem, indexOfLastItem, favorites]);

  const setPage = useCallback(event => {
    setCurrentPage(event);
  });

  return (
    <FavoritesListBox>
      <FavoritesListContent>
        <FavoritesListElements>
          {currentItems && currentItems.length > 0 ? (
            currentItems.map((bookmarks, idx) => {
              return <BookmarkComponent key={idx} bookmarks={bookmarks} idx={idx} />;
            })
          ) : (
            <p>추가하신 즐겨찾기가 없습니다.</p>
          )}
        </FavoritesListElements>
        <Paging page={currentPage} count={count} setPage={setPage} itemPerPage={itemPerPage} />
      </FavoritesListContent>
    </FavoritesListBox>
  );
}

const FavoritesListBox = styled.section`
  display: flex;
  justify-content: center;
`;

const FavoritesListContent = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FavoritesListElements = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  li {
    margin-bottom: 30px;
  }
`;

export default FavoritesList;
