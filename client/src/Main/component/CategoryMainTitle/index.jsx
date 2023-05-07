import styled from 'styled-components';
import data from '../../data/data.json';

// 카테고리 메인 타이틀 컴포넌트
const CategoryMainTitle = () => {
  const StyledCategoryMainTitle = styled.div`
    background-color: #fff;
    width: 300px;
    height: 150px;
    display: flex;
    flex-direction: column;
  `;
  const S_Tag = styled.div`
    display: flex;
    align-items: end;
    flex: 1;
  `;
  const S_Introduce = styled.div`
    display: flex;
    flex: 2;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 500;
  `;
  return (
    <StyledCategoryMainTitle>
      <S_Tag>#{data.foods[0].category}</S_Tag>
      <S_Introduce>{data.foods[0].category} 맛집 순위별로 골라보기</S_Introduce>
    </StyledCategoryMainTitle>
  );
};

export default CategoryMainTitle;
