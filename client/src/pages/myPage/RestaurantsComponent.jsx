import styled from 'styled-components';
import { TiHeartFullOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom';

function RestaurantsComponent({ restaurant }) {
  const { name, score, bookmark, createdAt, restaurantId, imageList } = restaurant;
  return (
    <Restaurant key={restaurantId}>
      <Link to={`/restaurant/${restaurantId}`}>
        <RestaurantContent>
          <img src={imageList[0].url} alt={name} />
        </RestaurantContent>
        <RestaurantDesc>
          <RestaurantTitle>
            <span>{name}</span>
            <span className="score">{score}</span>
          </RestaurantTitle>
          <RestaurantInfo>
            <p>
              <TiHeartFullOutline className="icon" />
              {bookmark}
            </p>
            <p>{createdAt.slice(0, 10)}</p>
          </RestaurantInfo>
        </RestaurantDesc>
      </Link>
    </Restaurant>
  );
}

const Restaurant = styled.li`
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
const RestaurantDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const RestaurantTitle = styled.p`
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

const RestaurantContent = styled.div`
  img {
    width: 100%;
    margin: 12px 0 15px;
  }
`;

const RestaurantInfo = styled.div`
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

export default RestaurantsComponent;
