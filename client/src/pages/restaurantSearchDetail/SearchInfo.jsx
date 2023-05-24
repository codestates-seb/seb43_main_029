//외부 import
import styled from 'styled-components';
import { connect } from 'react-redux';

/** 서치의 검색 결과 타이틀이 담긴 컴포넌트 */
const SearchInfo = ({ searchValue }) => {
  return (
    <SearchInfoContainer>
      <SearchTitle>{searchValue.searchValue} 검색 결과</SearchTitle>
    </SearchInfoContainer>
  );
};

const mapStateToProps = state => ({
  searchValue: state.searchValue,
});
export default connect(mapStateToProps)(SearchInfo);

//style

export const SearchInfoContainer = styled.div`
  padding-top: 50px;
  border: 1px solid #000;
`;

export const SearchTitle = styled.h1`
  font-size: 25px;
`;
