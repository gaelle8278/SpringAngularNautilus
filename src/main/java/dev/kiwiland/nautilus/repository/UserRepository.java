package dev.kiwiland.nautilus.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import dev.kiwiland.nautilus.model.User;

public interface UserRepository extends CrudRepository<User, Long> {
	
	Optional<User> findByPseudo(String pseudo);

}
