//내부 import
import { M_RootContainer } from '../styled';
/** swiper css */
import './M_FoodRecommend.css';

//외부 import
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
// import { useEffect, useState } from 'react';
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
            translate: ['-120%', 0, -200],
          },
          next: {
            shadow: true,
            translate: ['120%', 0, -200],
          },
        }}
        className="mySwiper"
      >
        <Carausel1 />
        <Carausel2 />
        <Carausel3 />
        <Carausel4 />
        <Carausel5 />
      </Swiper>
      <Foo />
    </M_RootContainer>
  );
};

export default M_FoodRecommend;

const Carausel = styled(SwiperSlide)`
  background: no-repeat center;
  background-size: cover;
`;

const Carausel1 = styled(Carausel)`
  background-image: url('https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
`;
const Carausel2 = styled(Carausel)`
  background-image: url('https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1633&q=80');
`;
const Carausel3 = styled(Carausel)`
  background-image: url('https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
`;
const Carausel4 = styled(Carausel)`
  background-image: url('https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
`;
const Carausel5 = styled(Carausel)`
  background-image: url('https://images.unsplash.com/photo-1564759077036-3def242e69c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
`;

const Foo = styled.div`
  width: 100vw;
  height: 50vh;
`;
