import styled from 'styled-components';
import CategoryMainTitle from '../../component/CategoryMainTitle';
import RestarurantComponent from '../../component/RestaurantComponent';
import SubRestarurantComponent from '../../component/SubRestarurantComponent';

const CategoryMain = () => {
  const StyledCategoryMain = styled.div`
    background-color: skyblue;
    width: 100vw;
    height: 100vh;
  `;

  return (
    <StyledCategoryMain>
      <CategoryMainTitle />
      <RestarurantComponent />
      <SubRestarurantComponent />
    </StyledCategoryMain>
  );
};

export default CategoryMain;
