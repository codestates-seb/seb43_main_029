import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function MyBookmark() {
  const { id } = useParams();
  const [bookmarks, setBookmark] = useState([]);
  const recentBookmark = bookmarks.slice(-9);
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
            recentBookmark.map((bookmarks, idx) => {
              return (
                <Bookmark key={idx}>
                  <div className="padding">
                    <BookmarkTitle className="underLine">
                      <a href="/">
                        <MarginP>{bookmarks.name}</MarginP>
                      </a>
                      <p>{bookmarks.score}</p>
                    </BookmarkTitle>
                    <BookmarkContent className="underLine">
                      <img src={bookmarks.image} alt={bookmarks.name} />
                    </BookmarkContent>
                    <BookmarkDate>
                      <MarginP>작성날짜</MarginP>
                    </BookmarkDate>
                  </div>
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
  border-radius: 10px;
  background: #f2f2f2;
  .underLine {
    border-bottom: 1px solid #e5e5e5;
  }
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
const BookmarkTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const BookmarkContent = styled.div`
  img {
    width: 100%;
    margin: 12px 0 15px;
  }
`;

const BookmarkDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const MarginP = styled.p`
  margin: 11px 0;
`;
export default MyBookmark;
