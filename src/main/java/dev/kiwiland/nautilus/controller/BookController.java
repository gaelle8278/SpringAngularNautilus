package dev.kiwiland.nautilus.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.kiwiland.nautilus.model.Book;
import dev.kiwiland.nautilus.service.BookService;

@RestController
@RequestMapping(path = "${apiPrefix}")
public class BookController {
	
	@Autowired
	private BookService bookService;
	
	/**
	 * Get all books
	 * @return - An Iterable object of Book full filled
	 */
	@GetMapping("/books")
	public Iterable<Book> getBooks() {
		return bookService.getBooks();
		
	}
}
