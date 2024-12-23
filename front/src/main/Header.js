import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom'; // 리액트 라우터 사용시
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell, faUser } from "@fortawesome/free-solid-svg-icons";


function Header() {
    const navigate = useNavigate();
    const goLogin = () => {
        navigate("/login");
    }

    return (
        <header className="header">
            <div className="header__logo">FilmVerse</div>
            <nav className="header__nav">
                <ul>
                    <li><Link to="/">홈</Link></li>
                    <li><Link to="/tv">TV 프로그램</Link></li>
                    <li><Link to="/movies">영화</Link></li>
                    <li><Link to="/latest">NEW!</Link></li>
                    <li><Link to="/my-list">내가 찜한 콘텐츠</Link></li>
                </ul>
            </nav>
            <div className="header__icons">
                <FontAwesomeIcon icon={faSearch} className="header__icon" />
                <FontAwesomeIcon icon={faBell} className="header__icon" />
                <FontAwesomeIcon icon={faUser} className="header__icon header__profile" onClick={goLogin} />
            </div>
        </header>
    );
}

export default Header;
