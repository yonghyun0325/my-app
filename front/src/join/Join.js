import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Join.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Join() {

    const [showPw, setShowPw] = useState(false);
    
    const navigate = useNavigate();
    const goMain = () => {
        navigate("/");
    }

    return (
        <div className="joinSection">
            <div className="joinCard">
                <div className="joinLeft">
                    <img src="/logo.webp" alt="FilmVerse Logo" className="logoImage" onClick={goMain} />
                </div>
                <div className="joinRight">
                    <h2>회원가입</h2>
                    <form>
                        <div className="inputBox">
                            <label>아이디(이메일)</label>
                            <input type="email" placeholder="example@FilmVerse.com" required maxLength={30} />
                            <p>이미 존재하는 아이디입니다.</p>
                        </div>
                        <div className="inputBox">
                            <label>닉네임</label>
                            <input type="text" placeholder="닉네임을 입력하세요(3-8자리)" required minLength={3} maxLength={8} />
                            <p>이미 존재하는 닉네임입니다.</p>
                        </div>
                        <div className="inputBox">
                            <label>비밀번호</label>
                            <div className="inputPassword">
                                <input
                                    type={showPw ? "text" : "password"}
                                    placeholder="비밀번호를 입력하세요"
                                    required
                                    maxLength={30}
                                />
                                <button type="button" onClick={() => setShowPw(!showPw)}>
                                    <FontAwesomeIcon
                                        icon={showPw ? faEyeSlash : faEye}
                                        className="eyeIcon"
                                        />
                                </button>
                            </div>
                            <p>영대소문자, 숫자, 특수문자를 조합하여 6~30자로 입력하세요.</p>
                        </div>
                        <div className="checkBox">
                            <label>
                                <input type="checkbox" />
                                [필수] 개인정보수집 동의
                            </label>
                            <label>
                                <input type="checkbox" />
                                [필수] 14세 이상입니다.
                            </label>
                            <label>
                                <input type="checkbox" />
                                [선택] 이메일로 알림 받기
                            </label>
                        </div>
                        <button type="submit" className="joinButton">
                            회원가입
                        </button>
                    </form>
                    <div className="linkBox">
                        <Link to="/login">로그인으로 돌아가기</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Join;