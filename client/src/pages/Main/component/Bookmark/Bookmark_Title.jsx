//내부 import
import { TitleBox } from '../../styled';

/** 즐겨찾기 타이틀을 담은 컴포넌트 */
const Bookmark_Title = () => {
  return (
    <TitleBox>
      <div className="Title_Tag">&#35; 즐겨찾기 Top 5</div>
      <div className="Title_Desc_First">한 번으로는</div>
      <div className="Title_Desc_Second">부족한 식당 모음</div>
    </TitleBox>
  );
};
export default Bookmark_Title;
