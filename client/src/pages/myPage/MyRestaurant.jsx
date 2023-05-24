import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import RestaurantsComponent from '../myPage/RestaurantsComponent.jsx';
import { TiChevronLeft, TiChevronRight } from 'react-icons/ti';
import { useSelector } from 'react-redux';

function MyRestaurant() {
  const { id } = useParams();
  const [restaurants, setRestaurant] = useState([]);
  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);
  const accessToken = useSelector(state => state.Auth.token);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/members/${id}`, {
        headers: {
          Authorization: `${accessToken}`,
        },
      })
      .then(res => {
        console.log(res);
        setRestaurant(res.data.data.restaurantList);
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
    <MyRestaurantBlock>
      <h3>나의 식당</h3>
      <Link to={`/restaurant`}>식당등록</Link>
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
        <RestaurantList ref={elementRef}>
          <Restaurants>
            {restaurants ? (
              restaurants.map((restaurant, idx) => {
                return <RestaurantsComponent key={idx} restaurant={restaurant} idx={idx} />;
              })
            ) : (
              <p>추가하신 즐겨찾기가 없습니다.</p>
            )}
          </Restaurants>
        </RestaurantList>
      </CarouselBlock>
    </MyRestaurantBlock>
  );
}
const MyRestaurantBlock = styled.section`
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
const RestaurantList = styled.div`
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
const Restaurants = styled.ul`
  white-space: nowrap;
`;

export default MyRestaurant;
