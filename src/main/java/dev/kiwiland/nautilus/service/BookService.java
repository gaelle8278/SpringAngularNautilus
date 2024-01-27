package dev.kiwiland.nautilus.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.kiwiland.nautilus.model.Book;
import dev.kiwiland.nautilus.repository.BookRepository;
import lombok.Data;

@Data
@Service
public class BookService {
	
	@Autowired
    private BookRepository bookRepository;

    public Optional<Book> getBook(Long id) {
        return bookRepository.findById(id);
    }

    public Iterable<Book> getBooks() {
    	Iterable<Book> books = bookRepository.findAll();
    	for (Book book : books) {
    	    System.out.println(book.getId());
    	}
    	System.out.println(books);
        return books ;
    }

    public void deleteBook(Long id) {
    	bookRepository.deleteById(id);
    }

    public Book saveBook(Book book) {
    	Book savedBook = bookRepository.save(book);
        return savedBook;
    }

}
