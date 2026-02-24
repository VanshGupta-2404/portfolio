package com.vansh.portfolio.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PortfolioData {
    private String name;
    private String email;
    private String phone;
    private String location;
    private String github;
    private String linkedin;
    private String leetcode;
    private String about;
    private Education education;
    private List<Experience> experience;
    private List<Project> projects;
    private List<String> skills;
    private List<String> achievements;
    private List<String> certifications;
}
