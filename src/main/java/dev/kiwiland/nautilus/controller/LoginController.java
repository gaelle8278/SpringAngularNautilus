package dev.kiwiland.nautilus.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.kiwiland.nautilus.bean.Login;
import dev.kiwiland.nautilus.service.UserService;

@RestController
@RequestMapping(path = "${apiPrefix}")
public class LoginController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/login")
	Login doLogin(@RequestBody Login newLogin)
	{
		return userService.fillLogin(newLogin);
		
	}

}

