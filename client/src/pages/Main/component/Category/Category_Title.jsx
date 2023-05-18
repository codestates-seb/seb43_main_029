//내부 import
import { fetchRandomRestaurants } from '../../../../redux/randomRestaurants/actions';
import { TitleBox } from '../../styled';

//외부 import
import { useEffect } from 'react';
import { connect } from 'react-redux';

/** 랜덤 카테고리 타이틀 */
const Category_Title = ({ fetchRandomRestaurants, restaurants }) => {
  useEffect(() => {
    fetchRandomRestaurants();
  }, []);
  return (
    <>
      {restaurants && (
        <TitleBox>
          <div className="Title_Tag">&#35; 푸드피디아 pick!</div>
          <div className="Title_Desc_First">
            <span className="point">{restaurants.category}</span> 맛집
          </div>
          <div className="Title_Desc_Second">순위별로 골라보기</div>
        </TitleBox>
      )}
    </>
  );
};
const mapStateToProps = state => {
  return {
    restaurants: state.randomRestaurants.restaurants[0],
  };
};
export default connect(mapStateToProps, { fetchRandomRestaurants })(Category_Title);