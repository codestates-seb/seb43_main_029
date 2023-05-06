import styled from 'styled-components';
import CategoryMainTitle from '../../component/CategoryMainTitle';

const CategoryMain = () => {
  const StyledCategoryMain = styled.div`
    background-color: skyblue;
    width: 100vw;
    height: 100vh;
  `;

  return (
    <StyledCategoryMain>
      <CategoryMainTitle />
    </StyledCategoryMain>
  );
};

export default CategoryMain;
