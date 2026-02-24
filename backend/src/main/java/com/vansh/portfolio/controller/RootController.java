package com.vansh.portfolio.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RootController {

    @GetMapping("/")
    public String index() {
        return "<html><body style='font-family: sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background-color: #050505; color: white;'>"
                +
                "<h1 style='color: #00f3ff;'>Portfolio Backend is Running</h1>" +
                "<p>The API is available at <a href='/api/portfolio' style='color: #9d00ff;'>/api/portfolio</a></p>" +
                "<p>The Frontend is running at <a href='http://localhost:5173' style='color: #00f3ff;'>http://localhost:5173</a></p>"
                +
                "</body></html>";
    }
}
