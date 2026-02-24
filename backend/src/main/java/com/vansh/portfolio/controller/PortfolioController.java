package com.vansh.portfolio.controller;

import com.vansh.portfolio.model.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class PortfolioController {

        @GetMapping("/portfolio")
        public PortfolioData getPortfolioData() {
                return PortfolioData.builder()
                                .name("Vansh Gupta")
                                .email("guptavansh2404@gmail.com")
                                .phone("+91-7291801921")
                                .location("Delhi, India")
                                .github("https://github.com/VanshGupta-2404")
                                .linkedin("https://www.linkedin.com/in/vansh-gupta24/")
                                .leetcode("https://leetcode.com/u/VanshGupta24/")
                                .about("Final-year Computer Science undergraduate with strong experience in full-stack development, API integrations, and AI automation. Proficient in Java, Python, and modern backend systems with hands-on production deployments.")
                                .education(Education.builder()
                                                .school("Parul University, Gujarat")
                                                .degree("B.Tech in Computer Science & Engineering")
                                                .duration("2022 – 2026")
                                                .grade("CGPA: 8.20/10")
                                                .build())
                                .skills(Arrays.asList(
                                                "Java", "Python", "JavaScript", "SQL", "C++",
                                                "Spring Boot", "Node.js", "Express", "REST APIs", "API Integration",
                                                "React.js", "HTML", "CSS",
                                                "MySQL", "MongoDB",
                                                "n8n", "LLM APIs", "Prompt Engineering", "Workflow Automation",
                                                "Git", "GitHub", "Postman", "Docker", "IntelliJ", "VS Code", "Linux",
                                                "OOP", "DSA", "SDLC", "System Design", "Debugging", "CI/CD"))
                                .experience(Arrays.asList(
                                                Experience.builder()
                                                                .role("Full Stack & AI Automation Intern")
                                                                .company("Innoworq Infotech")
                                                                .date("Feb 2025 – Present")
                                                                .desc("Developed full-stack web applications using Java Spring Boot, React, MySQL, REST APIs. Built and deployed company website innoworqacademy.com. Created AI-powered automation pipelines using n8n, Python, and LLM tools.")
                                                                .build(),
                                                Experience.builder()
                                                                .role("Software Development Intern")
                                                                .company("Consult IT, Delhi")
                                                                .date("Jun 2024 – Aug 2024")
                                                                .desc("Built AI-based helmet detection system using Python, OpenCV, and Django REST APIs. Deployed services on Linux servers and optimized performance.")
                                                                .build()))
                                .projects(Arrays.asList(
                                                Project.builder()
                                                                .title("File Sharing System")
                                                                .tech(Arrays.asList("React", "Node.js", "MongoDB"))
                                                                .desc("Developed real-time file sharing platform with secure uploads and downloads. Implemented scalable backend APIs and responsive UI.")
                                                                .link("https://qrbasesharing.bytexl.live")
                                                                .build(),
                                                Project.builder()
                                                                .title("Support Management System")
                                                                .tech(Arrays.asList("Spring Boot", "React"))
                                                                .desc("Built customer support and ticketing platform with authentication and database persistence.")
                                                                .link("https://swastsupport.bytexl.live")
                                                                .build()))
                                .achievements(Arrays.asList(
                                                "Top 20% on LeetCode with 700+ problems solved",
                                                "250+ problems solved on GeeksforGeeks",
                                                "Global top 10% rank in competitive coding contests",
                                                "Reliance Foundation Undergraduate Scholar"))
                                .certifications(Arrays.asList(
                                                "Wipro Certified Full Stack Java Developer",
                                                "Machine Learning – Coursera (Stanford)",
                                                "Git & Version Control – Google Developers"))
                                .build();
        }
}
