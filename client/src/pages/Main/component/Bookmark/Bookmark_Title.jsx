//내부 import
import { TitleBox } from '../../styled';

//외부 import

/** 즐겨찾기 타이틀 */
const Bookmark_Title = () => {
  return (
    <TitleBox>
      <h2 className="Title_Tag">&#35; 즐겨찾기 Top 5</h2>
      <h1 className="Title_Desc">한 번으로는 부족한 식당 모음</h1>
    </TitleBox>
  );
};
export default Bookmark_Title;
