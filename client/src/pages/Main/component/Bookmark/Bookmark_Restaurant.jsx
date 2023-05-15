import { RestaurantBox } from '../../styled';

const Bookmark_Restaurant = props => {
  return (
    <RestaurantBox>
      <div className="Restaurant_Image">
        <img src={props.images} alt={props.name} />
      </div>
      <div className="Restaurant_Info">
        <div className="Restaurant_NameAndScore">
          <span className="Restaurant_Name">{props.name}</span>
          <span className="Restaurant_Bookmark">{props.bookmark}</span>
        </div>
        <span className="Restaurant_Address">{props.address}</span>
      </div>
    </RestaurantBox>
  );
};

export default Bookmark_Restaurant;
