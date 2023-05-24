import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { TiHeartFullOutline, TiHeartOutline } from 'react-icons/ti';
import RestaurantDesc from './RestaurantDesc';
import MapContainer from './MapContainer';
import RestaurantReview from './RestaurantReview';
import { useSelector } from 'react-redux';

function Restaurant() {
  const userInfo = useSelector(state => state.userinfo.user);
  const memberId = userInfo.memberId;
  const accessToken = useSelector(state => state.Auth.token);

  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState([]);
  const {
    name,
    phone,
    restDay,
    score,
    address,
    bookmark,
    businessDay,
    categoryName,
    imageList,
    menuList,
  } = restaurant;
  const [isOn, setIsOn] = useState(false);
  const [BookmarkOn, setBookmarkOn] = useState(false);

  // 레스토랑 정보 가져오기
  const restaurantApi = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/restaurant/${id}`);
    axios.defaults.headers.common['Authorization'] = `${accessToken}`;
    setRestaurant(response.data.data);
  };

  // 유저 즐겨찾기 체크 여부 조회
  const userBookmarkApi = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/restaurant/${memberId}/${id}`
    );
    axios.defaults.headers.common['Authorization'] = `${accessToken}`;
    setBookmarkOn(response.data.heart);
  };

  // 즐겨찾기 추가 및 삭제 api
  const handleBookmark = async () => {
    setIsOn(!isOn);
    setBookmarkOn(!BookmarkOn);
    await axios
      .post(`${process.env.REACT_APP_API_URL}/restaurant/${memberId}/${id}`, {
        memberId,
        restaurantId: Number(id),
      })
      .then(response => {
        if (response.status === 201) {
          // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
          axios.defaults.headers.common['Authorization'] = `${accessToken}`;
          navigate('');
        }
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    restaurantApi();
    userBookmarkApi();
  }, []);

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
                    {BookmarkOn ? (
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
              </ul>
            </RestaurantMoreInfo>
          </RestaurantTop>
          <RestaurantInfo>
            <h2 className="visually-hidden">식당정보</h2>
            <RestaurantDesc
              address={address}
              phone={phone}
              restDay={restDay}
              businessDay={businessDay}
              menuList={menuList}
            />
            <MapContainer address={address} />
          </RestaurantInfo>
          <RestaurantReview restaurantId={id} name={name} />
        </RestaurantBlock>
      </RestaurantSection>
    </>
  );
}

const RestaurantSection = styled.section`
  margin: 2rem 0 10rem;
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
  li {
    position: relative;
    width: 381px;
    height: 340px;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(50, 50);
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: auto;
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
