package dev.kiwiland.nautilus.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import dev.kiwiland.nautilus.service.BookService;

@WebMvcTest(controllers = BookController.class)
public class BookControllerTest {
	@Autowired
    private MockMvc mockMvc;

    @MockBean
    private BookService bookService;

    @Test
    public void testGetBooks() throws Exception {
        mockMvc.perform(get("/api/books"))
            .andExpect(status().isOk());
    }


}
