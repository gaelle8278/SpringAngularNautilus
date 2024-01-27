package dev.kiwiland.nautilus.bean;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
public class Login {
	
	private String pseudo;
	
	private String password;
	
	private boolean allowed;

	public String getPseudo() {
		return pseudo;
	}

	public void setPseudo(String pseudo) {
		this.pseudo = pseudo;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public boolean isAllowed() {
		return allowed;
	}

	public void setAllowed(boolean allowed) {
		this.allowed = allowed;
	}

}
