import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { TiHeartFullOutline, TiHeartOutline } from 'react-icons/ti';
import RestaurantDesc from './RestaurantDesc';
import MapContainer from './MapContainer';
import RestaurantReview from './RestaurantReview';

function Restaurant() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState([]);
  const {
    restaurantId,
    name,
    phone,
    resDay,
    score,
    address,
    bookmark,
    businessDay,
    categoryName,
    imageList,
    menuList,
  } = restaurant;
  const [isOn, setIsOn] = useState(false);

  const restaurantApi = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/restaurants/${id}`);
    // console.log(response);
    setRestaurant(response.data);
  };
  useEffect(() => {
    restaurantApi();
  }, []);

  function handleBookmark() {
    setIsOn(!isOn);
  }

  return (
    <>
      <RestaurantSection>
        <h1 className="visually-hidden">식당상세페이지</h1>
        <RestaurantImageList>
          {imageList &&
            imageList.map((image, restaurantId) => {
              return (
                <li key={restaurantId}>
                  <img src={image.url} alt="name" />
                </li>
              );
            })}
        </RestaurantImageList>
        <RestaurantBlock>
          <RestaurantTop>
            <RestaurantTitle>
              <h2>{name}</h2>
              <p>{categoryName}</p>
            </RestaurantTitle>
            <RestaurantMoreInfo>
              <ul>
                <li>
                  <p className="score">{score}</p>
                </li>
                <li className="bookmarkToggle">
                  <button onClick={handleBookmark}>
                    {isOn ? (
                      <TiHeartFullOutline className="bookmarkIcon" />
                    ) : (
                      <TiHeartOutline className="bookmarkIcon" />
                    )}
                    <p>즐겨찾기</p>
                  </button>
                </li>
              </ul>
              <ul>
                <li className="moreInfoIcon">
                  <TiHeartFullOutline className="icon" /> <p>{bookmark}</p>
                </li>
                <li className="moreInfoIcon">
                  <TiHeartFullOutline className="icon" /> <p>{bookmark}</p>
                </li>
              </ul>
            </RestaurantMoreInfo>
          </RestaurantTop>
          <RestaurantInfo>
            <h2 className="visually-hidden">식당정보</h2>
            <RestaurantDesc
              address={address}
              phone={phone}
              resDay={resDay}
              businessDay={businessDay}
              menuList={menuList}
            />
            <MapContainer address={address} />
          </RestaurantInfo>
          <RestaurantReview restaurantId={restaurantId} />
        </RestaurantBlock>
      </RestaurantSection>
    </>
  );
}

const RestaurantSection = styled.section`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;

const RestaurantImageList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 5px;
  img {
    width: 100%;
  }
`;

const RestaurantBlock = styled.section`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 20px;
  @media screen and (max-width: 1244px) {
    max-width: -webkit-fill-available;
  }
`;

const RestaurantTop = styled.div`
  border-bottom: 1px solid #9e9e9e;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 1rem;
  margin-top: 4rem;
`;

const RestaurantTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h2 {
    font-size: 2rem;
    color: #2f3134;
  }

  p {
    font-size: 1.125rem;
    color: #9e9e9e;
  }
`;
const RestaurantMoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  button {
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0;
    &:focus {
      border: none;
    }
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 2rem;
    justify-content: flex-end;
  }
  li {
    display: flex;
    flex-direction: row;
  }
  .moreInfoIcon {
    gap: 4px;
    p {
      font-size: 1.5rem;
      color: #9e9e9e;
    }
  }
  .score {
    font-size: 4.5rem;
    color: #ff0099;
  }
  .bookmarkToggle {
    margin-top: -5px;
    display: flex;
    flex-direction: column;
  }
  .bookmarkIcon {
    font-size: 3rem;
    color: #eb5757;
  }
  .icon {
    font-size: 1.5rem;
    color: #9e9e9e;
    margin-top: -2px;
  }
`;
const RestaurantInfo = styled.section`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 0 20px 2rem;
  border-bottom: 1px solid #9e9e9e;
`;

export default Restaurant;
