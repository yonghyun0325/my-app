package com.example.FilmVerse.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UserController {
	
	@ResponseBody
	@GetMapping("/FilmVerse/hello")
	public String hello() {
		System.out.println("여기 옴");
		return "hi.";
	}
	
}
