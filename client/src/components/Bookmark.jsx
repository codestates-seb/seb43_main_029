import styled from 'styled-components';
import { TiPencil, TiHeartFullOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom';

export const BookmarkComponent = ({ idx, bookmarks }) => {
  return (
    <Bookmark key={idx}>
      <Link to={`/restaurant/${bookmarks.restaurantId}`}>
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
      </Link>
    </Bookmark>
  );
};

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
const BookmarkDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
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
  color: #9e9e9e;
  p {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .icon {
    font-size: 1.125rem;
    margin-bottom: 3px;
  }
`;

export default BookmarkComponent;
