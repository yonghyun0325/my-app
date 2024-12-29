package com.example.FilmVerse.repository;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.example.FilmVerse.dto.MemberDTO;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class MemberDAO {
	
	private static final String Mapper = "com.example.FilmVerse.mapper.MemberMapper";
	private final SqlSessionTemplate sqlSession;
	
	//아이디 중복검사
	public int checkId(String id) {
		return sqlSession.selectOne(Mapper+".checkId", id);
	}

	//닉네임 중복검사
	public int checkNick(String nickName) {
		return sqlSession.selectOne(Mapper+".checkNick", nickName);
	}

	//회원등록
	public int join(MemberDTO dto) {
		return sqlSession.insert(Mapper+".join", dto);
	}

	//로그인
	public int login(MemberDTO dto) {
		return sqlSession.selectOne(Mapper+".login", dto);
	}

}
