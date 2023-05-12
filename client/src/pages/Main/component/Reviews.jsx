import { SERVER_URL_MEMBERS } from '../config';

import { useEffect, useState } from 'react';
import axios from 'axios';

import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Reviews = () => {
  const [isReview, setIsReveiw] = useState([]);

  useEffect(() => {
    axios.get(SERVER_URL_MEMBERS).then(res => setIsReveiw(res.data));
  }, []);
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
      navigation
      modules={[Grid, Pagination, Navigation]}
      className="mySwiper"
    >
      {isReview.map(prop => (
        <Mem_Review key={Math.random()}>
          <div className="reviewBox">
            <div className="topBox">
              <div className="contentBox">
                <div className="content">&ldquo; 마싯따 &ldquo;</div>
              </div>
              <div className="nameAndScoreBox">
                <span className="name">김밥천국</span>
                <span className="score">4.5</span>
              </div>
            </div>
            <div className="bottomBox">
              <div className="address">{prop.createdAt}</div>
            </div>
          </div>
        </Mem_Review>
      ))}
      ;
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
  .topBox {
    background-color: #fff;
    flex: 2;
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }
  .contentBox {
    flex: 4;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content {
    margin-top: 1rem;
    width: 10vw;
    overflow: hidden;
  }
  .nameAndScoreBox {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: end;
    padding-right: 0.5rem;
    font-weight: 700;
  }
  .score {
    padding-left: 0.5rem;
    color: #ec4899;
  }

  .bottomBox {
    flex: 1;
    display: flex;
    justify-content: end;
    padding: 0.5rem;
  }
  .address {
    font-size: 0.8em;
    color: #6b7280;
  }
`;
