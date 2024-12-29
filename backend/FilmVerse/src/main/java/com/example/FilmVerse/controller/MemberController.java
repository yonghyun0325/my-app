package com.example.FilmVerse.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.FilmVerse.dto.MemberDTO;
import com.example.FilmVerse.service.MemberService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/FilmVerse/member")
@RequiredArgsConstructor
public class MemberController {
	
	private final MemberService memberServiceImpl;
	
	//회원가입
	@PostMapping("/joinMember")
	public String joinMember(@RequestBody MemberDTO dto) {
		String result = "fail";
		
		//아이디 중복검사
		int checkId = memberServiceImpl.checkId(dto.getId());
		//닉네임 중복검사
		int checkNick = memberServiceImpl.checkNick(dto.getNickName());
		
		if(checkId == 1 && checkNick == 1) {
			result = "duplicateIdNick";
		}else if(checkId == 1) {
			result = "duplicateId";
		}else if(checkNick == 1) {
			result = "duplicateNick";
		}else {
			if(memberServiceImpl.join(dto) == 1) { //회원등록
				result = "ok";				
			}
		}
		
		return result;
	}
	
	//로그인
	@PostMapping("/login")
	public String login(@RequestBody MemberDTO dto) {
		String result = "fail";
		
		if(memberServiceImpl.login(dto) == 1) {
			result = "ok";
		}
		
		return result;
	}
	
}
