import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Login() {

    const [showPw, setShowPw] = useState(false);

    const navigate = useNavigate();
    const goMain = () => {
        navigate("/");
    }

    return (
        <div className="loginSection">
            <div className="loginCard">
                <div className="loginLeft">
                    <img src="/logo.webp" alt="FilmVerse Logo" className="logoImage" onClick={goMain} />
                </div>
                <div className="loginRight">
                    <h2>로그인</h2>
                    <form>
                        <div className="inputBox">
                            <label>아이디</label>
                            <input type="email" placeholder="example@FilmVerse.com" required maxLength={30} />
                        </div>
                        <div className="inputBox">
                            <label>비밀번호</label>
                            <div className="inputPassword">
                                <input type={showPw ? "text" : "password"} placeholder="비밀번호를 입력하세요" required minLength={4} maxLength={30} />
                                <button type="button" onClick={() => setShowPw(!showPw)}>
                                    <FontAwesomeIcon
                                        icon={showPw ? faEyeSlash : faEye}
                                        className="eyeIcon"
                                    />
                                </button>
                                </div>
                            </div>
                        <button type="submit" className="loginButton">
                        로그인
                        </button>
                    </form>
                    <div className="linkBox">
                        <a href="#">아이디 찾기</a>
                        <span>|</span>
                        <a href="#">비밀번호 찾기</a>
                        <span>|</span>
                        <Link to="/join">회원가입</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;