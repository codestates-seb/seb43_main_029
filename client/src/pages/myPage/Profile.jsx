import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { TiPencil } from 'react-icons/ti';
import Modal from './Modal.jsx';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Profile({ userInfo }) {
  const { id } = useParams();
  const { nickname, profileUrl, createdAt } = userInfo;
  const inputEl = useRef(null);
  const [name, setName] = useState(nickname);
  const [isEdit, setIsEdit] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [img, setImg] = useState(profileUrl);

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
    const editName = {
      nickname: `${e.target.value}`,
    };
    axios.patch(`http://localhost:3001/members/${id}`, editName);
  }
  function enterPress(e) {
    if (e.key === 'Enter') {
      setIsEdit(!isEdit);
    }
  }
  function openModal() {
    setIsModal(true);
  }
  function closeModal() {
    setIsModal(false);
  }

  useEffect(() => {
    setImg(profileUrl);
    setName(nickname);
  }, [profileUrl, nickname]);

  return (
    <>
      <ProfileBlock>
        <UserImg background={img} onClick={openModal} />
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
      <Modal isOpen={isModal} closeModal={closeModal} setImg={setImg} userInfo={userInfo} />
    </>
  );
}

const ProfileBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const UserImg = styled.div`
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
