import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';

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

  const userInfo = useSelector(state => state.userinfo.user);
  const memberId = userInfo.memberId;
  const accessToken = useSelector(state => state.Auth.token);

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
      new Blob(
        [
          JSON.stringify({
            memberId: Number(memberId),
            categoryId: Number(categoryName),
            name,
            phone,
            address,
            menuList,
            restDay,
            businessDay,
          }),
        ],
        { type: 'application/json' }
      )
    );

    selectedImages.forEach(image => {
      formData.append('multipartFile', image);
    });

    const config = {
      headers: {
        Authorization: `${accessToken}`,
      },
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/restaurant`, formData, config)
      .catch(error => console.log(error));
  };

  return (
    <RegistBox>
      <ContentBox>
        <RegistrationForm onSubmit={handleSubmit}>
          <RegistrationTitle>식당 등록</RegistrationTitle>
          <div className="formLayout">
            <FormBox>
              <label htmlFor="name">식당 이름</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </FormBox>
            <FormBox>
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
            </FormBox>
          </div>

          <div className="formLayout">
            <FormBox>
              <label htmlFor="images">식당 이미지 추가</label>
              <input
                type="file"
                id="images"
                multiple
                onChange={handleImageChange}
                className="imageInput"
              />
              <div>
                {previewImages.map((previewUrl, index) => (
                  <img key={index} src={previewUrl} alt={`Preview ${index}`} className="imageEl" />
                ))}
              </div>
            </FormBox>
          </div>

          <div className="formLayout">
            <FormBox>
              <label htmlFor="address">식당 주소</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={event => setAddress(event.target.value)}
              />
            </FormBox>
            <FormBox>
              <label htmlFor="phone">식당 연락처</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={event => setPhone(event.target.value)}
              />
            </FormBox>
          </div>

          <div className="formLayout">
            <FormBox>
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
                  className="menuName"
                />
                <input
                  type="number"
                  name="price"
                  value={menuInput.price}
                  onChange={handleMenuChange}
                  placeholder="Menu Price"
                  className="menuPrice"
                />
                <button type="button" onClick={handleAddMenu}>
                  추가
                </button>
              </div>
            </FormBox>
          </div>

          <div className="formLayout">
            <FormBox>
              <label htmlFor="businessDay">식당 영업일</label>
              <input
                type="text"
                id="businessDay"
                value={businessDay}
                onChange={event => setBusinessDay(event.target.value)}
              />
            </FormBox>
            <FormBox>
              <label htmlFor="restDay">식당 휴무일</label>
              <input
                type="text"
                id="restDay"
                value={restDay}
                onChange={event => setRestDay(event.target.value)}
              />
            </FormBox>
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
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const RegistrationTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 30px;
`;

const RegistrationForm = styled.form`
  border: 2px solid rgb(77, 77, 77);
  border-radius: 30px;
  padding: 20px;
  .formLayout {
    display: flex;
    margin-bottom: 20px;
  }

  .imageEl {
    width: 90px;
    height: 90px;
  }

  button {
    border: 1px solid #ff0099;
    border-radius: 10px;
    background-color: #fff;
    padding: 10px;
    color: #ff0099;
    transition: all 0.5s;
    cursor: pointer;

    &:hover {
      color: #fff;
      background-color: #ff0099;
    }
  }
`;

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;

  label {
    margin-bottom: 10px;
    font-weight: bold;
  }

  .menuName {
    margin-right: 20px;
  }
  .menuPrice {
    margin-right: 20px;
  }

  .imageInput {
    margin-bottom: 10px;
    width: 400px;
  }

  input {
    width: 200px;
    height: 30px;

    &[type='file'] {
      border: inherit;
    }
  }

  select {
    width: 200px;
    height: 35px;
  }

  input[type='file']::file-selector-button {
    width: 150px;
    height: 30px;
    background: #fff;
    border: 1px solid rgb(77, 77, 77);
    border-radius: 10px;
    cursor: pointer;
    margin-right: 10px;
    transition: all 0.5s;

    &:hover {
      background: rgb(77, 77, 77);
      color: #fff;
    }
  }
`;
export default Registration_restaurant;
