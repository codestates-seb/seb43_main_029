//내부 import
import { TitleBox } from '../../styled';

//외부 import
import styled from 'styled-components';

/** 즐겨찾기 타이틀 */
const Bookmark_Title = () => {
  return (
    <B_TitleBox>
      <h2 className="Title_Tag">&#35; 즐겨찾기 Top 5</h2>
      <h1 className="Title_Desc">
        한 번으로는 <br className="space" />
        부족한 식당 모음
      </h1>
    </B_TitleBox>
  );
};
export default Bookmark_Title;

const B_TitleBox = styled(TitleBox)`
  margin-left: 200px;

  .Title_Tag {
    text-align: end;
  }
  .Title_Desc {
    text-align: end;
    width: 100%;
  }
  @media all and (min-width: 570px) and (max-width: 767px) {
    margin: 0;
    .Title_Tag {
      text-align: start;
    }
    .Title_Desc {
      text-align: start;
    }
    .space {
      display: none;
    }
  }
`;
