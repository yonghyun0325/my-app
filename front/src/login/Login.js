import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Login() {

    //비밀번호 보이기, *표시
    const [showPw, setShowPw] = useState(false);

    //네비게이션
    const navigate = useNavigate();
    const goMain = () => {
        navigate("/");
    }
    
    //폼 데이터 관리
    const [formData, setFormData] = useState({
        id : '',
        pw : ''
    });
    //폼 데이터에 이름, 닉네임 저장
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    //로그인
    const loginSubmit = (e) => {
        e.preventDefault(); //폼 제출 막기

        axios.post('http://localhost:8081/FilmVerse/member/login', formData)
            .then(response => {
                if(response.data === 'ok'){
                    goMain();
                }else{
                    alert("아이디 혹은 비밀번호가 맞지 않습니다.");
                }
            })
    }

    return (
        <div className="loginSection">
            <div className="loginCard">
                <div className="loginLeft">
                    <img src="/logo.webp" alt="FilmVerse Logo" className="logoImage" onClick={goMain} />
                </div>
                <div className="loginRight">
                    <h2>로그인</h2>
                    <form onSubmit={loginSubmit}>
                        <div className="inputBox">
                            <label>아이디</label>
                            <input type="email" placeholder="example@FilmVerse.com" required maxLength={30}
                                name="id" onChange={handleChange} value={formData.id} />
                        </div>
                        <div className="inputBox">
                            <label>비밀번호</label>
                            <div className="inputPassword">
                                <input type={showPw ? "text" : "password"} placeholder="비밀번호를 입력하세요" required minLength={4} maxLength={30}
                                    name="pw" onChange={handleChange} value={formData.pw} />
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