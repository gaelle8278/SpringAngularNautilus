package dev.kiwiland.nautilus.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

import org.apache.commons.codec.digest.DigestUtils;
import dev.kiwiland.nautilus.bean.Login;
import dev.kiwiland.nautilus.model.User;
import dev.kiwiland.nautilus.repository.UserRepository;
import lombok.Data;

@Data
@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public Login fillLogin(Login login)
	{
		Optional<User> user = this.userRepository.findByPseudo(login.getPseudo());
		
		if (user.isPresent() && user.get().getPassword().equals(DigestUtils.md5Hex(login.getPassword())))
		{
			login.setAllowed(true);
		}
		return login;
	}
	
}
