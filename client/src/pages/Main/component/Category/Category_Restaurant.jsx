//내부 import
import { RestaurantBox } from '../../styled';
import Loading from '../Loading';

//외부 import
import { FaHeart, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

/** 랜덤 카테고리 식당 개별 컴포넌트 */
const Category_Restaurant = ({ url, name, score, bookmark, location, loading, restaurantId }) => {
  return (
    <RestaurantBox>
      {/* 서버에서 데이터 오기 전까지 스피너 보여줌 */}
      {loading ? (
        <Loading />
      ) : (
        <>
          <Link to={`/restaurant/${restaurantId}`}>
            <div className="Restaurant_Image">
              <img src={url} alt={name} />
            </div>
          </Link>
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

export default Category_Restaurant;
