//내부 import
import { TitleBox } from '../../styled';
//redux
import { fetchRandomRestaurants } from '../../../../redux/randomRestaurants/actions';

//외부 import
import { useEffect } from 'react';
import { connect } from 'react-redux';

/** 랜덤 카테고리 타이틀 */
const Category_Title = ({ fetchRandomRestaurants, restaurants }) => {
  useEffect(() => {
    //최초 렌더시 서버 데이터 가져옴
    fetchRandomRestaurants();
  }, []);
  console.log(restaurants);
  return (
    <>
      {restaurants && (
        <TitleBox>
          <h2 className="Title_Tag">&#35; 푸드피디아 pick!</h2>
          <h1 className="Title_Desc">
            <span className="randomCategory">{restaurants.categoryName}</span> 맛집 순위별로
            모아보기
          </h1>
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
