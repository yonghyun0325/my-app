package com.example.FilmVerse.service;

import com.example.FilmVerse.dto.MemberDTO;

public interface MemberService {

	int checkId(String id); //아이디 중복검사

	int checkNick(String nickName); //닉네임 중복검사

	int join(MemberDTO dto); //회원등록

	int login(MemberDTO dto); //로그인

}
