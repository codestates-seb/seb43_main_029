import styled from 'styled-components';
import RegistrationInput from './Registration_input';

function RegistrationForm({ restaurantData, onFormSubmit, onInputChange, onImageChange, nextId }) {
  return (
    <RegistForm onSubmit={onFormSubmit}>
      <RegistrationInput
        name="name"
        label="식당 이름"
        value={restaurantData.name}
        onChange={onInputChange}
      />
      <RegistrationInput
        type="file"
        name="image"
        label="이미지"
        onChange={onImageChange}
        accept="image/*"
      />
      <RegistrationInput
        className="hidden"
        name="id"
        label="id"
        value={nextId}
        onChange={onInputChange}
        disabled
      />
      <button type="submit">등록</button>
      <button>취소</button>
    </RegistForm>
  );
}

const RegistForm = styled.form`
  .hidden {
    display: none;
  }
`;

export default RegistrationForm;
