import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { TiPencil } from 'react-icons/ti';
// import Modal from './Modal.jsx';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Profile({ userInfo }) {
  const { id } = useParams();
  const { nickname, url, createdAt } = userInfo;
  const inputEl = useRef(null);
  const [name, setName] = useState(nickname);
  const [isEdit, setIsEdit] = useState(false);
  const [img, setImg] = useState(url);
  const upload = useRef();

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

  function imgChange() {
    console.log(upload.current.files[0]);
    setImg(URL.createObjectURL(upload.current.files[0]));
    console.log(img);
  }

  useEffect(() => {
    setImg(url);
    setName(nickname);
  }, [url, nickname]);

  return (
    <>
      <ProfileBlock>
        <UserImg background={img} htmlFor="file" />
        <input
          id="file"
          type="file"
          ref={upload}
          onChange={imgChange}
          accept={'image/*'}
          className="hidden"
        />
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

const UserImg = styled.label`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  background: ${props => `url(${props.background}) no-repeat center`};
  background-size: 128px;
  cursor: pointer;
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
