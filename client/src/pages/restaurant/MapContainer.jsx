/* global kakao */
import { useRef, useEffect } from 'react';
import styled from 'styled-components';

const MapContainer = ({ address }) => {
  const container = useRef(null);
  const options = {
    center: new kakao.maps.LatLng(37.50802, 127.062835),
    level: 3,
  };

  useEffect(() => {
    // 지도를 생성합니다.
    const map = new kakao.maps.Map(container.current, options);
    // 주소-좌표 변환 객체를 생성합니다.
    const geocoder = new kakao.maps.services.Geocoder();
    // 주소로 좌표를 검색합니다..
    geocoder.addressSearch(`${address}`, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        const marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
        marker.setMap(map);
      }
    });
  }, [address]);

  return <MapContainerBlock id="map" ref={container}></MapContainerBlock>;
};

const MapContainerBlock = styled.div`
  width: 100%;
  height: 300px;
  flex: 1;
  @media screen and (max-width: 768px) {
    flex: auto;
    margin-bottom: 2rem;
  }
`;

export default MapContainer;
