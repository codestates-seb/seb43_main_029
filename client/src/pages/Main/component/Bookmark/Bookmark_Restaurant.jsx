//내부 import
import { RestaurantBox } from '../../styled';
import Loading from '../Loading';

//외부 import
import { FaHeart, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
/** 즐겨찾기 식당 개별 컴포넌트 */
const Bookmark_Restaurant = ({ url, name, score, bookmark, location, loading, restaurantId }) => {
  //서버 데이터를 받아오기 전까지는 스피너 컴포넌트를 보여줌.
  return (
    <RestaurantBox>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="Restaurant_Image">
            <Link to={`/restaurant/${restaurantId}`}>
              <img src={url} alt={name} />
            </Link>
          </div>
          <div className="Restaurant_Info">
            <h4 className="Restaurant_Name">{name}</h4>
            <div>
              <span className="Restaurant_Score">
                평균
                <FaStar className="icons" />
                {score}
              </span>
              <span className="Restaurant_Bookmark">
                <FaHeart className="icons" />
                {bookmark}
              </span>
            </div>
            <span className="Restaurant_Address">{location}</span>
          </div>
        </>
      )}
    </RestaurantBox>
  );
};

export default Bookmark_Restaurant;
