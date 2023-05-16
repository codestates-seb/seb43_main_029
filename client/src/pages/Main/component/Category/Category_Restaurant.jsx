//내부 import
import { RestaurantBox } from '../../styled';

//외부 import
import { FaHeart, FaStar } from 'react-icons/fa';

/** 즐겨찾기 식당 개별 컴포넌트 */
const Category_Restaurant = props => {
  return (
    <RestaurantBox>
      <div className="Restaurant_Image">
        <img src={props.images} alt={props.name} />
      </div>
      <div className="Restaurant_Info">
        <span className="Restaurant_Name">{props.name}</span>
        <div>
          <span className="Restaurant_Score">
            예상
            <FaStar className="icons" />
            {props.score}
          </span>
          <span className="Restaurant_Bookmark">
            <FaHeart className="icons" />
            {props.bookmark}
          </span>
        </div>

        <span className="Restaurant_Address">{props.address}</span>
      </div>
    </RestaurantBox>
  );
};

export default Category_Restaurant;
