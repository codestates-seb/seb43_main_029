//내부 import
import { M_RootContainer } from '../styled';

/** swiper css */
import './FoodRecommend.css';

//외부 import
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import styled from 'styled-components';

/** 메인 페이지_메뉴 추천 컴포넌트 */
const M_FoodRecommend = () => {
  return (
    <M_RootContainer>
      <Swiper
        //간격
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          /* 넘어가는 속도 : 3초*/
          delay: 3000,
          disableOnInteraction: false,
        }}
        resistance={true}
        modules={[Autoplay, EffectCreative]}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-120%', 0, -500],
          },
          next: {
            shadow: true,
            translate: ['120%', 0, -500],
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide> Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <div>오늘 뭐먹지??</div>
      <Button>Click!</Button>
    </M_RootContainer>
  );
};

export default M_FoodRecommend;

//style
const Button = styled.button`
  background-color: blue;
  color: #fff;

  font-size: 1.5rem;

  border: none;
  border-radius: 5px;

  cursor: pointer;
`;
