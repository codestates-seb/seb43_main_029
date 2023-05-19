import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
// import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ReviewComponent } from '../../../../components/Review';
import { TiChevronLeft, TiChevronRight } from 'react-icons/ti';

function MyReivew() {
  // const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  // const recentReview = reviews.slice(-9);
  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);

  // useEffect(() => {
  //   axios.get(`${process.env.REACT_APP_API_URL}/members/${id}`).then(res => {
  //     setReviews(res.data.reviews);
  //   });
  // }, [id]);

  const reviewApi = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/reviews`);
    setReviews(response.data);
  };

  useEffect(() => {
    reviewApi();
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
    <MyReivewBlock>
      <CarouselBlock>
        <ButtonContainer>
          <button
            className="Left btn"
            onClick={() => {
              handleHorizantalScroll(elementRef.current, 10, 200, -10);
            }}
            disabled={arrowDisable}
          >
            <TiChevronLeft className="icon" />
          </button>
          <button
            className="Right btn"
            onClick={() => {
              handleHorizantalScroll(elementRef.current, 10, 200, 10);
            }}
          >
            <TiChevronRight className="icon" />
          </button>
        </ButtonContainer>
        <ReivewsList ref={elementRef}>
          <Reviews>
            {reviews ? (
              reviews.map((review, idx) => {
                return <ReviewComponent key={idx} idx={idx} review={review} />;
              })
            ) : (
              <p>작성하신 리뷰가 없습니다.</p>
            )}
          </Reviews>
        </ReivewsList>
      </CarouselBlock>
    </MyReivewBlock>
  );
}

const MyReivewBlock = styled.section`
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
const CarouselBlock = styled.div`
  position: relative;
  &:hover {
    .btn {
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
const ReivewsList = styled.div`
  margin-top: 2rem;
  overflow: auto;
  touch-action: pan-x;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Reviews = styled.ul`
  white-space: nowrap;
`;

export default MyReivew;