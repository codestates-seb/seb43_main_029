import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Reviews = () => {
  return (
    <ReviewsContainer
      slidesPerView={5}
      grid={{
        rows: 1,
      }}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Grid, Pagination]}
      className="mySwiper"
    >
      <Mem_Review>
        <div className="reviewBox">
          <div className="contentBox">
            <div className="content">&ldquo; 커밋... &ldquo;</div>
          </div>
          <ul className="InfoBox">
            <li className="nameAndScore">
              <span className="name">식당이름</span>
              <span className="score">별점</span>
            </li>
            <div className="address">작성일</div>
          </ul>
        </div>
      </Mem_Review>
    </ReviewsContainer>
  );
};

export default Reviews;
//style
const ReviewsContainer = styled(Swiper)`
  height: 100%;
`;

const Mem_Review = styled(SwiperSlide)`
  background-color: initial;
  .reviewBox {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }
  .contentBox {
    background-color: #fff;
    flex: 1.5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .content {
    width: 10vw;
    overflow: hidden;
  }
  .InfoBox {
    flex: 1;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  .nameAndScore {
    font-weight: 700;
    font-size: 1.2rem;
  }
  .score {
    padding-left: 0.5rem;
    color: #ec4899;
  }
  .address {
    padding-top: 0.2rem;
    font-size: 0.8em;
    color: #6b7280;
  }
`;
