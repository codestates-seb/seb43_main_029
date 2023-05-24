import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
// import RegistrationForm from './Registration_form';

function Registration_restaurant() {
  const [categoryName, setCategoryName] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [menuList, setMenuList] = useState([]);
  const [restDay, setRestDay] = useState('');
  const [businessDay, setBusinessDay] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [menuInput, setMenuInput] = useState({ name: '', price: 0 });
  const [previewImages, setPreviewImages] = useState([]);

  const handleMenuChange = event => {
    const { name, value } = event.target;
    setMenuInput(prevInput => ({ ...prevInput, [name]: value }));
  };

  const handleAddMenu = () => {
    setMenuList(prevList => [...prevList, { ...menuInput }]);
    setMenuInput({ name: '', price: 0 });
  };

  const handleRemoveMenu = index => {
    setMenuList(prevList => prevList.filter((_, i) => i !== index));
  };

  const handleImageChange = event => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImages(prevImages => [...prevImages, file]);
      const imageUrl = URL.createObjectURL(file);
      setPreviewImages(prevImages => [...prevImages, imageUrl]);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const formData = new FormData();
    formData.append(
      'restaurantPostDto',
      JSON.stringify({
        memberId: 1,
        categoryName,
        name,
        phone,
        address,
        menuList,
        restDay,
        businessDay,
      })
    );

    selectedImages.forEach(image => {
      formData.append('multipartFile', image);
    });

    const config = {
      Headers: {
        'Content-Type': 'application/json',
      },
    };

    axios.post(`${process.env.REACT_APP_API_URL}/restaurant `, formData, config);
  };

  return (
    <RegistBox>
      <ContentBox>
        <RegistrationTitle>식당 등록</RegistrationTitle>
        <RegistrationForm onSubmit={handleSubmit}>
          <div>
            <label htmlFor="categoryName">식당 카테고리</label>
            <select
              id="categoryName"
              value={categoryName}
              onChange={event => setCategoryName(event.target.value)}
            >
              <option value="">카테고리를 선택하세요</option>
              <option value="1">한식</option>
              <option value="2">중식</option>
              <option value="3">일식</option>
              <option value="4">양식</option>
              <option value="5">치킨</option>
              <option value="6">피자</option>
              <option value="7">패스트푸드</option>
              <option value="8">분식</option>
              <option value="9">카페</option>
              <option value="10">아시안</option>
            </select>
          </div>

          <div>
            <label htmlFor="name">식당 이름</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="phone">식당 연락처</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={event => setPhone(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="address">식당 주소</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={event => setAddress(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="menuList">식당 메뉴 추가</label>
            {menuList.map((menu, index) => (
              <div key={index}>
                <span>{menu.name}</span>
                <span>{menu.price}</span>
                <button type="button" onClick={() => handleRemoveMenu(index)}>
                  -
                </button>
              </div>
            ))}
            <div>
              <input
                type="text"
                name="name"
                value={menuInput.name}
                onChange={handleMenuChange}
                placeholder="메뉴 이름을 입력하세요"
              />
              <input
                type="number"
                name="price"
                value={menuInput.price}
                onChange={handleMenuChange}
                placeholder="Menu Price"
              />
              <button type="button" onClick={handleAddMenu}>
                추가
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="restDay">식당 휴무일</label>
            <input
              type="text"
              id="restDay"
              value={restDay}
              onChange={event => setRestDay(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="images">식당 이미지 추가</label>
            <input type="file" id="images" multiple onChange={handleImageChange} />
            <div>
              {previewImages.map((previewUrl, index) => (
                <img key={index} src={previewUrl} alt={`Preview ${index}`} className="imageList" />
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="businessDay">식당 영업일</label>
            <input
              type="text"
              id="businessDay"
              value={businessDay}
              onChange={event => setBusinessDay(event.target.value)}
            />
          </div>

          <button type="submit">완료</button>
        </RegistrationForm>
      </ContentBox>
    </RegistBox>
  );
}

const RegistBox = styled.section`
  display: flex;
  justify-content: center;
  padding: 100px 0;
`;

const ContentBox = styled.div`
  width: 1200px;
`;

const RegistrationTitle = styled.h1`
  font-size: 24px;
`;

const RegistrationForm = styled.form`
  .imageList {
    width: 90px;
    height: 90px;
  }
`;

export default Registration_restaurant;
