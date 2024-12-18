import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* 내부 라우팅 링크 */}
                <div className="footer-links">
                    <ul>
                        <li><Link to="/help">도움말</Link></li>
                        <li><Link to="/account">계정</Link></li>
                        <li><Link to="/media">미디어 센터</Link></li>
                        <li><Link to="/jobs">채용 정보</Link></li>
                        <li><Link to="/privacy">개인정보</Link></li>
                        <li><Link to="/terms">이용 약관</Link></li>
                    </ul>
                </div>

                {/* 외부 소셜 미디어 링크 */}
                <div className="footer-socials">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="페이스북">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="인스타그램">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="트위터">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="유튜브">
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                    </a>
                </div>

                {/* 하단 카피라이트 */}
                <div className="footer-bottom">
                    <p>© 2024 넷플릭스 - All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
