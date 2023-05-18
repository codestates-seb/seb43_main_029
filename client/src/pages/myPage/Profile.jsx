import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { TiPencil } from 'react-icons/ti';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button';

function Profile({ userInfo }) {
  const { id } = useParams();
  const { nickname, url, createdAt } = userInfo;
  const inputEl = useRef(null);
  const [name, setName] = useState(nickname);
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(null);
  const [files, setFiles] = useState({});
  const [preview, setPreview] = useState(false);

  function nameEditBtn() {
    setIsEdit(!isEdit);
    if (inputEl.current === null) {
      setTimeout(() => {
        inputEl.current.focus();
      }, 10);
    }
  }

  function nameChange(e) {
    setName(e.target.value);
  }
  function enterPress(e) {
    if (e.key === 'Enter') {
      setIsEdit(!isEdit);
      const editName = {
        nickname: `${name}`,
      };
      axios.patch(`${process.env.REACT_APP_API_URL}/members/${id}/nickname`, editName);
    }
  }

  useEffect(() => {
    setImage(url);
    setName(nickname);
  }, [url, nickname]);

  function imgChange(e) {
    const file = e.target.files[0];

    setFiles(file);

    setPreview(!preview);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  }

  function handleChangeImg() {
    const formdata = new FormData();
    formdata.append('multipartFile', files);
    console.log(files);
    const config = {
      Headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.patch(`${process.env.REACT_APP_API_URL}/members/${id}/profile`, formdata, config);
  }

  return (
    <>
      <ProfileBlock>
        <UserLayout>
          <UserImg background={image} htmlFor="file" />
          <form encType="multipart/form-data">
            <input
              id="file"
              type="file"
              onChange={imgChange}
              accept={'image/*'}
              className="hidden"
            />
          </form>
          {preview ? (
            <UserImgButton onClick={handleChangeImg}>이미지변경</UserImgButton>
          ) : (
            <UserImgButton onClick={imgChange}>이미지선택</UserImgButton>
          )}
        </UserLayout>
        <div>
          <UserName>
            {!isEdit ? (
              <p>{name}</p>
            ) : (
              <input
                type="text"
                value={name}
                ref={inputEl}
                onChange={nameChange}
                onKeyPress={enterPress}
              />
            )}
            <TiPencil className="icon" onClick={nameEditBtn} />
          </UserName>
          <p>{String(createdAt).slice(0, 10)}</p>
        </div>
      </ProfileBlock>
    </>
  );
}

const ProfileBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  .hidden {
    display: none;
  }
`;
const UserLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const UserImg = styled.label`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  background: ${props => `url(${props.background}) no-repeat center`};
  background-size: 128px;
  cursor: pointer;
`;

const UserImgButton = styled(Button)`
  position: absolute;
  bottom: 0;
  left: 15%;
`;

const UserName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  font-size: 1.125rem;
  input {
    font-size: 1.125rem;
  }
  .icon {
    cursor: pointer;
  }
`;

export default Profile;
