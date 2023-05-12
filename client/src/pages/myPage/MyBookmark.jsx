import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { TiPencil, TiHeartFullOutline } from 'react-icons/ti';

function MyBookmark() {
  const { id } = useParams();
  const [bookmarks, setBookmark] = useState([]);
  // const recentBookmark = bookmarks.slice(-9);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/members/${id}`).then(res => {
      setBookmark(res.data.bookmarks);
    });
  }, []);
  return (
    <MyBookmarkBlock>
      <h3>즐겨찾기 목록</h3>
      <BookmarkList>
        <Bookmarks>
          {bookmarks ? (
            bookmarks.map((bookmarks, idx) => {
              return (
                <Bookmark key={idx}>
                  <a href="/">
                    <BookmarkContent>
                      <img src={bookmarks.image} alt={bookmarks.name} />
                    </BookmarkContent>
                    <BookmarkDesc>
                      <BookmarkTitle>
                        <span>{bookmarks.name}</span>
                        <span className="score">{bookmarks.score}</span>
                      </BookmarkTitle>
                      <BookmarkInfo>
                        <p>
                          <TiPencil className="icon" />
                          {bookmarks.reviewCount}
                        </p>
                        <p>
                          <TiHeartFullOutline className="icon" />
                          {bookmarks.bookmarkCount}
                        </p>
                        <p>작성날짜</p>
                      </BookmarkInfo>
                    </BookmarkDesc>
                  </a>
                </Bookmark>
              );
            })
          ) : (
            <p>추가하신 즐겨찾기가 없습니다.</p>
          )}
        </Bookmarks>
      </BookmarkList>
    </MyBookmarkBlock>
  );
}
const MyBookmarkBlock = styled.section`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 1.5rem;
  }
  a {
    color: #2f3134;
    text-decoration: none;
  }
`;
const BookmarkList = styled.div`
  margin-top: 2rem;
  overflow: auto;
  overflow-x: auto;
  overflow-y: hidden;
  touch-action: pan-x;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Bookmarks = styled.ul`
  white-space: nowrap;
`;

const Bookmark = styled.li`
  .padding {
    padding: 5px 15px;
    width: 100%;
  }
  display: inline-flex;
  margin-right: 1rem;
  width: 22%;
  @media screen and (max-width: 1023px) {
    width: 30%;
  }
  @media screen and (max-width: 768px) {
    width: 45%;
  }
`;
const BookmarkDesc = styled.div``;
const BookmarkTitle = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  span {
    font-size: 1.5rem;
  }
  .score {
    color: #ff0099;
  }
`;

const BookmarkContent = styled.div`
  img {
    width: 100%;
    margin: 12px 0 15px;
  }
`;

const BookmarkInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  p {
    font-size: 1.125rem;
  }
`;

export default MyBookmark;
