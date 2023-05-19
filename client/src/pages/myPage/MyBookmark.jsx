import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { BookmarkComponent } from '../../components/Bookmark';
import { TiChevronLeft, TiChevronRight } from 'react-icons/ti';

function MyBookmark({ userInfo }) {
  const { id } = useParams();
  const [bookmarks, setBookmark] = useState([]);
  // const recentBookmark = bookmarks.slice(-9);
  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);

  // useEffect(() => {
  //   axios.get(`${process.env.REACT_APP_API_URL}/members/${id}/bookmark`).then(res => {
  //     setBookmark(res.data);
  //   });
  // }, []);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/members/${id}/bookmark`).then(res => {
      console.log(res.data.data);
      setBookmark(res.data.data);
    });
  }, []);

  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };

  return (
    <MyBookmarkBlock>
      <MyBookmarkTitle>
        <h3>즐겨찾기 목록</h3>
        <Link to={`/mypage/${userInfo.memberId}/bookmarks`}>더보기</Link>
      </MyBookmarkTitle>
      <CarouselBlock>
        <ButtonContainer>
          <button
            className="Left"
            onClick={() => {
              handleHorizantalScroll(elementRef.current, 10, 200, -10);
            }}
            disabled={arrowDisable}
          >
            <TiChevronLeft className="icon" />
          </button>
          <button
            className="Right"
            onClick={() => {
              handleHorizantalScroll(elementRef.current, 10, 200, 10);
            }}
          >
            <TiChevronRight className="icon" />
          </button>
        </ButtonContainer>
        <BookmarkList ref={elementRef}>
          <Bookmarks>
            {bookmarks ? (
              bookmarks.map((bookmarks, idx) => {
                return <BookmarkComponent key={idx} bookmarks={bookmarks} idx={idx} />;
              })
            ) : (
              <p>추가하신 즐겨찾기가 없습니다.</p>
            )}
          </Bookmarks>
        </BookmarkList>
      </CarouselBlock>
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
const MyBookmarkTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-size: 1.5rem;
  }
`;
const CarouselBlock = styled.div`
  position: relative;
  &:hover {
    button {
      background: #fff;
      color: #4a4a4a;
      box-shadow: 0px 0px 10px #d9d9d9;
    }
  }
`;
const ButtonContainer = styled.div`
  button {
    position: absolute;
    top: 50%;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    z-index: 4;
    padding: 5px;
    background: transparent;
    color: transparent;
    transition: ease-in-out 0.2s;
  }
  .Left {
    left: 5px;
  }
  .Right {
    right: 5px;
  }
  .icon {
    font-size: 1.125rem;
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

export default MyBookmark;
