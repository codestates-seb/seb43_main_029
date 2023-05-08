import styled from 'styled-components';

// 카테고리 메인 타이틀 컴포넌트
const TitleCategory = () => {
  const TitleCategoryContainer = styled.div`
    background-color: #fff;
    width: 500px;
    height: 300px;
    display: flex;
    flex-direction: column;
  `;

  const TagCategory = styled.div`
    flex: 1;
    display: flex;
    align-items: end;
    margin-left: 16px;
  `;

  const Testimonials = styled.div`
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
  `;

  return (
    <TitleCategoryContainer>
      <TagCategory>#카테고리</TagCategory>
      <Testimonials>
        카테고리 of 카테고리
        <br />
        요즘 가장 핫한 카테고리
      </Testimonials>
    </TitleCategoryContainer>
  );
};

export default TitleCategory;
