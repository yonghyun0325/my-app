package com.example.FilmVerse.service;

import org.springframework.stereotype.Service;

import com.example.FilmVerse.dto.MemberDTO;
import com.example.FilmVerse.repository.MemberDAO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {
	
	private final MemberDAO dao;
	
	//아이디 중복검사
	@Override
	public int checkId(String id) {
		return dao.checkId(id);
	}

	//닉네임 중복검사
	@Override
	public int checkNick(String nickName) {
		return dao.checkNick(nickName);
	}

	//회원등록
	@Override
	public int join(MemberDTO dto) {
		return dao.join(dto);
	}

	//로그인
	@Override
	public int login(MemberDTO dto) {
		return dao.login(dto);
	}

}
