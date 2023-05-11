import { M_Page_Container, TopContainer, BottomContainer, ContentBox } from './Category';

import Rev_Title from '../component/Rev_Title';
import Reviews from '../component/Reviews';

import styled from 'styled-components';

const M_Review = () => {
  return (
    <M_Page_Container>
      <TopContainer>
        <Rev_ContentBox>
          <Rev_Title></Rev_Title>
        </Rev_ContentBox>
      </TopContainer>
      <BottomContainer>
        <ContentBox>
          <Reviews />
        </ContentBox>
      </BottomContainer>
    </M_Page_Container>
  );
};

export default M_Review;

//style
const Rev_ContentBox = styled(ContentBox)`
  flex-direction: column;
  align-items: start;
  justify-content: end;
`;
