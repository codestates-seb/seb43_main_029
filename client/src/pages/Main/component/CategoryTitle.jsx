import styled from 'styled-components';

// 카테고리 메인 타이틀 컴포넌트
const CategoryTitle = () => {
  return (
    <CategoryTitleContainer>
      <Tag>#카테고리</Tag>
      <Title>
        카테고리 of 카테고리
        <br />
        요즘 가장 핫한 카테고리
      </Title>
    </CategoryTitleContainer>
  );
};

export default CategoryTitle;

//style
const CategoryTitleContainer = styled.div`
  background-color: #fff;
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
`;

const Tag = styled.div`
  flex: 1;
  display: flex;
  align-items: end;
  margin-left: 16px;
`;

const Title = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
`;
