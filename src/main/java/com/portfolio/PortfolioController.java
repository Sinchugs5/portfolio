package com.portfolio;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PortfolioController {

    @GetMapping("/")
    public String index(Model model) {
        ResumeData data = new ResumeData();
        model.addAttribute("data", data);
        return "index";
    }
}
