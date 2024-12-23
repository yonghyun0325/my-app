import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Join.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Join() {

    //비밀번호 보이기, *표시
    const [showPw, setShowPw] = useState(false);
    //아이디 중복검사
    const [checkId, setCheckId] = useState('');
    //닉네임임 중복검사
    const [checkNick, setCheckNick] = useState('');
    //비밀번호 유효성검사
    const [errorPw, setErrorPw] = useState('');

    //폼 데이터 관리
    const [formData, setFormData] = useState({
        email: '',
        nickname: '',
        password: '',
    });
    
    const navigate = useNavigate();
    const goMain = () => {
        navigate("/");
    }

    // 비밀번호 유효성 검사
    const passwordCheck = (e) => {
        const password = e.target.value;

        if (password.length < 6) {
            setErrorPw('비밀번호는 6자 이상 입력해주세요.');

        }else{
            const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,30}$/;
            
            if(!regex.test(password)){
                setErrorPw('영대소문자, 숫자, 특수문자를 조합하여 6~30자로 입력하세요.');
            }else{
                setErrorPw('ok');
            }
        }
        setFormData({ ...formData, password });
    }  

    //폼 데이터에 이름, 닉네임 저장
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    //폼 제출
    const formSubmit = (e) => {
        e.preventDefault(); //폼 제출 막기

        if(errorPw !== 'ok'){
            alert("비밀번호를 알맞게 작성해주세요.");
            return;
        }



    }

    return (
        <div className="joinSection">
            <div className="joinCard">
                <div className="joinLeft">
                    <img src="/logo.webp" alt="FilmVerse Logo" className="logoImage" onClick={goMain} />
                </div>
                <div className="joinRight">
                    <h2>회원가입</h2>
                    <form onSubmit={formSubmit}>
                        <div className="inputBox joinId">
                            <label>아이디(이메일)</label>
                            <input type="email" placeholder="example@FilmVerse.com" required maxLength={30} 
                                name="email" value={formData.email} onChange={handleChange} />
                            <p>이미 존재하는 아이디입니다.</p>
                            {checkId && <p>{checkId}</p>}
                        </div>
                        <div className="inputBox joinNick">
                            <label>닉네임</label>
                            <input type="text" placeholder="닉네임을 입력하세요(3-8자리)" required minLength={3} maxLength={8} 
                                name="nickname" value={formData.nickname} onChange={handleChange} />
                            <p>이미 존재하는 닉네임입니다.</p>
                            {checkNick && <p>{checkNick}</p>}
                        </div>
                        <div className="inputBox">
                            <label>비밀번호</label>
                            <div className="inputPassword">
                                <input
                                    type={showPw ? "text" : "password"}
                                    placeholder="비밀번호를 입력하세요"
                                    required
                                    maxLength={30}
                                    onChange={passwordCheck}
                                    name="password"
                                    value={formData.password}
                                />
                                <button type="button" onClick={() => setShowPw(!showPw)}>
                                    <FontAwesomeIcon
                                        icon={showPw ? faEyeSlash : faEye}
                                        className="eyeIcon"
                                        />
                                </button>
                            </div>
                            <p style={{display: errorPw === '' ? 'block' : 'none'}}>영대소문자, 숫자, 특수문자를 조합하여 6~30자로 입력하세요.</p>
                            {errorPw && errorPw !== 'ok' && <p className="error">{errorPw}</p>}
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