package dev.kiwiland.nautilus.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import dev.kiwiland.nautilus.model.Book;

@Repository
public interface BookRepository extends CrudRepository<Book, Long> {

}
