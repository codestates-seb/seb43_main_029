import React from 'react'; // eslint-disable-line no-unused-vars

function Header({ onLoginClick }) {
    return (
        <header>
            <h1>Header</h1>
            <button onClick={onLoginClick}>로그인</button>
        </header>
    );
}

export default Header;