import styled from 'styled-components';
import data from '../../data/data.json';
const CategoryMainTitle = () => {
  console.log(data);
  const StyledCategoryMainTitle = styled.div`
    background-color: lime;
    width: 300px;
    height: 150px;
    display: flex;
    flex-direction: column;
  `;

  return (
    <StyledCategoryMainTitle>
      <div className="1">#카테고리</div>
      <div className="2">요즘 제일 핫한 카테고리 음식집 TOP 5</div>
    </StyledCategoryMainTitle>
  );
};

export default CategoryMainTitle;
