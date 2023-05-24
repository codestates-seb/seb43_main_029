//내부 import

//외부 import
import styled from 'styled-components';

/** 서치의 검색 결과 타이틀이 담긴 컴포넌트 */
const SearchInfo = ({ isSearchValue }) => {
  return (
    <SearchInfoContainer>
      <SearchTitle>{isSearchValue} 검색 결과</SearchTitle>
    </SearchInfoContainer>
  );
};

export default SearchInfo;

//style

export const SearchInfoContainer = styled.div`
  padding-top: 50px;
`;

export const SearchTitle = styled.h1`
  font-size: 25px;
`;
